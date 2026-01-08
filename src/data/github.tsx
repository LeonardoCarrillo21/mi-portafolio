export async function getGithubRepos() {
    const USUARIO = "LeonardoCarrillo21";
  const BRANCH = "main"; // o "master", según uses
  const NOMBRE_IMAGEN = "screenshot.png"; // La convención que elijas



    const response = await fetch(`https://api.github.com/users/${USUARIO}/repos?sort=updated`, {
      // Esto asegura que Next.js actualice los datos cada 1 horas (revalidate)
      next: { revalidate: 3600 }
    });

  if (!response.ok) throw new Error("No se pudieron cargar los repositorios");

  const repos = await response.json();
  // Filtramos para no mostrar forks y solo los que tienen descripción
  return repos
    .filter((repo: any) => {
      // CONDICIONES PARA MOSTRAR:
      const esPublico = !repo.private;
      const noEsFork = !repo.fork;
      const tieneTopicPortfolio = repo.topics?.includes("portfolio"); // <--- FILTRO CLAVE
      
      return esPublico && noEsFork && tieneTopicPortfolio;
    })
    .map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description,
      link: repo.html_url,
      tags: repo.topics || [],
      stars: repo.stargazers_count,
      // CONSTRUCCIÓN DEL LINK DE LA IMAGEN
      image: `https://raw.githubusercontent.com/${USUARIO}/${repo.name}/${BRANCH}/${NOMBRE_IMAGEN}`
    }));
}