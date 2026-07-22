// ============================================================
// FUENTE ÚNICA DE VERDAD del portfolio.
// Para actualizar el sitio (cualquier diseño), editá SOLO este archivo.
// ============================================================

export interface Project {
	name: string;
	description: string;
	/** Tecnologías usadas en el proyecto */
	stack: string[];
	/**
	 * Captura del proyecto. Subí la imagen a public/projects/ y poné acá
	 * la ruta, ej: '/projects/mi-app.png'. Clave para software a medida
	 * sin repo público ni demo: la captura es la evidencia del trabajo.
	 */
	image?: string;
	/** URL al repo de GitHub (opcional: los trabajos para clientes no suelen tenerlo) */
	repo?: string;
	/** URL a demo en vivo, si existe */
	demo?: string;
	/** Proyecto destacado: los diseños pueden darle más protagonismo */
	featured?: boolean;
	/** Año o rango, ej: "2026" */
	year?: string;
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export const profile = {
	name: 'Tomás', // TODO: confirmá nombre completo
	handle: '0tomi',
	role: 'Backend Developer',
	/** Bio corta para el hero (1-2 líneas) */
	tagline:
		'Desarrollador backend. Me apasiona construir sistemas: APIs, datos y la lógica que hace funcionar las cosas detrás de la pantalla.',
	/** Bio más larga, opcional, para una sección "about" */
	about:
		'Disfruto más diseñando una API o modelando datos que eligiendo colores. Me interesa la arquitectura limpia, el testing y escribir código que otro humano pueda leer.',
	location: 'Argentina',
	email: 'schlotahuertomas@gmail.com',
	/**
	 * Foto de perfil. TODO: subí tu foto real a public/ (ej: avatar.jpg)
	 * y cambiá esta ruta. Mientras tanto apunta a un placeholder SVG.
	 */
	avatar: '/avatar.svg',
	links: {
		github: 'https://github.com/0tomi',
		linkedin: '', // TODO
	},
} as const;

// Los diseños muestran los proyectos en el orden de este array.
export const projects: Project[] = [
	// TODO: reemplazar por proyectos reales
	{
		name: 'proyecto-uno',
		description:
			'API REST de ejemplo. Reemplazá esta entrada con tu proyecto real: qué hace, qué problema resuelve.',
		stack: ['Go', 'PostgreSQL', 'Docker'],
		image: '/projects/placeholder-1.svg',
		repo: 'https://github.com/0tomi',
		featured: true,
		year: '2026',
	},
	{
		name: 'proyecto-dos',
		description:
			'Software a medida para un cliente, de ejemplo: sin repo público ni demo — la captura cuenta la historia.',
		stack: ['TypeScript', 'Node.js'],
		image: '/projects/placeholder-2.svg',
		year: '2025',
	},
	{
		name: 'proyecto-tres',
		description:
			'Bot / worker de ejemplo. Procesa tareas en segundo plano con colas y reintentos.',
		stack: ['Python', 'Redis'],
		image: '/projects/placeholder-3.svg',
		repo: 'https://github.com/0tomi',
		year: '2025',
	},
];

export const skills: SkillGroup[] = [
	// TODO: ajustar a tu stack real
	{ label: 'Lenguajes', items: ['Go', 'TypeScript', 'Python', 'SQL'] },
	{ label: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Redis'] },
	{ label: 'Herramientas', items: ['Docker', 'Git', 'Linux', 'Neovim'] },
];
