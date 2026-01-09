export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export async function getGithubProjects(): Promise<Project[]> {
  const username = "LeonardoCarrillo21";
  
  // Realizamos el fetch
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
    next: { revalidate: 3600 } // Actualiza los datos cada hora
  });

  if (!response.ok) throw new Error("Error al obtener repositorios");

  const repos = await response.json();

  // Filtramos y mapeamos a nuestro formato de variable deseado
  return repos
    .filter((repo: any) => repo.topics?.includes("portfolio") && !repo.fork)
    .map((repo: any) => ({
      id: repo.id,
      title: repo.name.replace(/-/g, ' '), // Cambia "mi-proyecto" por "mi proyecto"
      description: repo.description || "Sin descripción disponible",
      image: `https://raw.githubusercontent.com/${username}/${repo.name}/${repo.default_branch}/screenshot.png`,
      tags: repo.topics || [],
      link: repo.html_url
    }));
}