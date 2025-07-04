// Language Switcher for CodAlea
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('codalea-language') || 'es';
        this.translations = {
            es: {
                // Navigation
                'nav-home': 'Inicio',
                'nav-features': 'Por qué CodAlea',
                'nav-about': 'Quiénes Somos',
                'nav-contact': 'Contáctanos',
                
                // Hero Section
                'hero-title-transform': 'Transforma Tu',
                'hero-title-code': 'Código',
                'hero-subtitle': 'Soluciones innovadoras para el desarrollo moderno',
                'hero-welcome': 'Bienvenido a CodAlea - Donde el Código se Encuentra con la Innovación',
                'hero-cta': 'Descubre Más',
                
                // Features Section
                'features-title': 'Por Qué Elegir',
                'features-subtitle': 'CodAlea',
                'features-lead': 'Descubre las ventajas que nos hacen únicos en el mundo del desarrollo de software',
                
                'feature-innovation-title': 'Innovación Continua',
                'feature-innovation-desc': 'Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones que destacan en el mercado.',
                'feature-innovation-badge': 'Innovación',
                
                'feature-scalability-title': 'Escalabilidad Empresarial',
                'feature-scalability-desc': 'Nuestras arquitecturas están diseñadas para crecer contigo, desde startup hasta enterprise.',
                'feature-scalability-badge': 'Escalable',
                
                'feature-performance-title': 'Rendimiento Óptimo',
                'feature-performance-desc': 'Código optimizado y arquitecturas eficientes que garantizan la mejor experiencia de usuario.',
                'feature-performance-badge': 'Rendimiento',
                
                // About Section
                'about-title': 'Quiénes Somos',
                'about-lead': 'Somos un equipo apasionado de desarrolladores y arquitectos de software, especialistas en crear soluciones digitales de <strong>clase enterprise</strong> que transforman ideas innovadoras en realidades tecnológicas robustas.',
                'about-description': 'Con más de <strong>10 años de experiencia</strong> en el ecosistema Microsoft y tecnologías modernas, diseñamos arquitecturas escalables, sistemas de alta disponibilidad y aplicaciones que soportan millones de transacciones diarias.',
                'about-projects': 'Proyectos Entregados',
                'about-experience': 'Años de Experiencia',
                'about-uptime': 'Uptime Garantizado',
                
                // Tech Categories
                'tech-backend': 'Backend & APIs',
                'tech-database': 'Bases de Datos',
                'tech-frontend': 'Frontend & UX',
                'tech-devops': 'DevOps & Cloud',
                
                // Methodology
                'methodology-agile': 'Metodologías Ágiles',
                'methodology-quality': 'Aseguramiento de Calidad',
                'methodology-architecture': 'Arquitectura de Software',
                
                // Skills
                'skills-title': 'Soft Skills & Competencias',
                'skill-problem-solving': 'Problem-solving',
                'skill-analytical': 'Analytical thinking',
                'skill-teamwork': 'Teamwork',
                'skill-leadership': 'Leadership',
                'skill-adaptability': 'Adaptability',
                'skill-remote': 'Remote collaboration',
                
                // Contact Section
                'contact-title': 'Contáctanos',
                'contact-lead': '¿Tienes un proyecto en mente? Conectemos y transformemos tus ideas en <strong>código extraordinario</strong>.',
                
                'contact-email-title': 'Email',
                'contact-email-desc': 'Envíanos tu consulta',
                'contact-email-hover': 'Hover para detalles',
                'contact-email-header': 'Correo Electrónico',
                'contact-email-response': 'Respuesta en 24h',
                'contact-email-consultation': 'Consultoría gratuita',
                'contact-email-ideas': 'Ideas innovadoras',
                'contact-email-action': 'Enviar Email',
                
                'contact-whatsapp-title': 'WhatsApp',
                'contact-whatsapp-desc': 'Chat directo con nosotros',
                'contact-whatsapp-header': 'WhatsApp Business',
                'contact-whatsapp-realtime': 'Chat en tiempo real',
                'contact-whatsapp-available': 'Disponible 24/7',
                'contact-whatsapp-support': 'Soporte personalizado',
                'contact-whatsapp-action': 'Iniciar Chat',
                
                // Additional Contact Info
                'info-location': 'Ubicación',
                'info-location-text': 'Colombia, Bogotá.',
                'info-schedule': 'Horario',
                'info-schedule-text': 'Lun - Vie: 8:00 AM - 5:00 PM',
                'info-consultation': 'Consultoría',
                'info-consultation-text': 'Primera sesión gratuita',
                'info-projects': 'Proyectos',
                'info-projects-text': 'Desde MVPs hasta Enterprise',
                
                // Footer
                'footer-text': 'Innovando el Futuro del Código',
                
                // Language
                'language-spanish': 'Español',
                'language-english': 'English',
                
                // Retro Console
                'console-title': 'CodAlea Terminal',
                'console-placeholder': 'Escribe un comando...',
                'console-prompt': 'CodAlea@retro:~$',
                'console-toggle-title': 'Abrir/Cerrar CodAlea Console - ¡Mira la persecución épica!',
                
                // Boot Messages
                'boot-header': '║        CodAlea RetroOS v2.0          ║\n║      Sistema de Comandos 8-bits      ║',
                'boot-initializing': '🔥 Inicializando sistema...',
                'boot-loading': '⚡ Cargando drivers de innovación...',
                'boot-connecting': '🚀 Conectando con la Matrix del código...',
                'boot-ready': '✨ Sistema listo para comandos!',
                'boot-hint': '💡 Pst, en CodAlea nos encantan los acertijos...',
                'boot-hint2': '🎮 Tienes una pequeña pista: puedes digitar\n   \'playthrone\' o \'playthriller\' 😉',
                'boot-help': 'Escribe \'help\' para ver comandos disponibles.',
                
                // Commands and Messages
                'command-not-recognized': '❌ Comando \'{cmd}\' no reconocido. Escribe \'help\' para ver comandos disponibles.',
                'command-suggest': '💡 ¿Quisiste decir: {suggestions}?',
                'command-matches': 'Coincidencias: {matches}',
                'console-cleared': 'Consola limpiada. ✨',
                'audio-stopped': '🔇 Audio detenido',
                'audio-playing': '🎵 Reproduciendo: {description}',
                'audio-volume': '🔊 Volumen: {volume}%',
                'audio-loop': '🔄 Modo: Bucle infinito',
                'audio-tip': '💡 Tip: Presiona Esc o cierra la consola para detener',
                'audio-error': '❌ Error reproduciendo audio: {error}',
                'audio-file-error': '🔍 Verifica que el archivo existe en /mp3songs/',
                'volume-adjusted': '🔊 Volumen ajustado a: {volume}%',
                'volume-current': '🔊 Volumen actual: {volume}%',
                'volume-usage': '💡 Uso: volume <0-100>',
                'volume-invalid': '❌ Volumen inválido. Usa un número entre 0-100',
                
                // Help Command
                'help-title': '🔧 Comandos disponibles:',
                'help-basic': '  help     - Mostrar esta ayuda\n  clear    - Limpiar consola\n  about    - Acerca de CodAlea\n  version  - Versión del sistema\n  credits  - Créditos del equipo\n  time     - Hora actual\n  joke     - Chiste random\n  quote    - Cita inspiradora\n  stats    - Estadísticas del sistema\n  easter   - Mostrar easter eggs\n  whoami   - ¿Quién eres?\n  echo     - Repetir texto\n  cowsay   - ASCII art con mensaje',
                'help-audio': '🎵 Comandos de audio:\n  stop     - Detener música actual\n  volume   - Ver/cambiar volumen (0-100)\n  mute     - Silenciar audio\n  unmute   - Restaurar volumen',
                'help-special': '🎮 Comandos especiales:\n  Hay comandos secretos... ¿puedes encontrarlos? 😉',
                'help-shortcuts': '⌨️  Atajos:\n  ↑/↓      - Historial de comandos\n  Tab      - Autocompletar\n  Ctrl+`   - Abrir/cerrar consola\n  Esc      - Cerrar consola y detener audio',
                
                // About Command
                'about-company': '🚀 CodAlea - Innovando el futuro del código',
                'about-desc1': 'Somos una empresa dedicada a crear soluciones',
                'about-desc2': 'tecnológicas innovadoras y experiencias digitales',
                'about-desc3': 'excepcionales. Combinamos la pasión por el código',
                'about-desc4': 'con creatividad y un toque retro.',
                'about-mission': '🌟 Nuestra misión: Transformar ideas en realidad',
                'about-vision': '💡 Nuestra visión: Un mundo más conectado',
                'about-values': '⚡ Nuestros valores: Innovación, calidad, diversión',
                'about-website': 'Visita: www.codalea.com 🌐',
                
                // Version Command
                'version-os': 'CodAlea RetroOS v2.0.2025',
                'version-build': 'Build: 20250703-retro-edition',
                'version-kernel': 'Kernel: CodAlea-Core 8.0',
                'version-powered': '💚 Powered by love and coffee',
                
                // Credits Command
                'credits-title': '🎨 CodAlea Development Team',
                'credits-lead': '👨‍💻 Lead Developer: Jonatham',
                'credits-sound': '🎵 Sound Design: Retro Synth AI',
                'credits-game': '🎮 Game Logic: 8-bit Masters',
                'credits-ui': '🎨 UI/UX: Pixel Art Collective',
                'credits-coffee': '☕ Coffee Provider: Local Café',
                'credits-thanks': '🙏 Agradecimientos especiales a:',
                'credits-mj': '- Michael Jackson (inspiración Thriller)',
                'credits-dp': '- Daft Punk (inspiración TRON)',
                'credits-net': '- La comunidad .NET',
                'credits-beta': '- Todos los beta testers',
                'credits-made': '💙 Hecho con amor en CodAlea',
                
                // Stats Command
                'stats-title': '📊 Estadísticas del Sistema CodAlea:',
                'stats-commands': '⚡ Comandos ejecutados: {count}',
                'stats-uptime': '🕒 Tiempo activo: {uptime}',
                'stats-memory': '💾 Memoria usada: {memory}%',
                'stats-cpu': '🔥 CPU: {cpu}%',
                'stats-connectivity': '🌐 Conectividad: ONLINE',
                'stats-status': '🚀 Estado: OPTIMAL',
                'stats-easter': '🎮 Easter eggs encontrados: ¿?',
                'stats-fun': '💡 Nivel de diversión: 9000+',
                
                // Easter Eggs Command
                'easter-title': '🥚 Easter Eggs disponibles:',
                'easter-music': '🎵 Hay comandos musicales ocultos...',
                'easter-games': '🎮 Algunos están relacionados con juegos clásicos...',
                'easter-movies': '💊 Otros con películas icónicas...',
                'easter-sequences': '🥋 Y algunos requieren secuencias especiales...',
                'easter-hint': '💡 Pista: \'play\' + algo podría funcionar... 😉',
                
                // WhoAmI Command
                'whoami-user': '🤖 Eres un usuario de CodAlea RetroOS',
                'whoami-privileges': '🌟 Privilegios: ADMIN',
                'whoami-level': '🎯 Nivel: Hacker Retro',
                'whoami-terminal': '💻 Terminal: CodAlea Console v2.0',
                'whoami-id': '🔑 ID: {id}',
                
                // Path Command
                'path-current': '/home/codalea/retro-system/',
                
                // List Files Command
                'ls-projects': '📁 projects/',
                'ls-games': '📁 games/',
                'ls-music': '📁 music/',
                'ls-readme': '📄 readme.txt',
                'ls-secrets': '📄 secrets.encrypted',
                'ls-easter': '📄 easter-eggs.hidden',
                'ls-thriller': '🎮 thriller.game',
                'ls-tron': '🎮 tron.game',
                'ls-core': '💾 codalea.core',
                
                // Cat Command
                'cat-usage': '❌ Uso: cat <archivo>',
                'cat-readme-1': 'Bienvenido a CodAlea RetroOS! 🚀',
                'cat-readme-2': 'Este sistema contiene easter eggs ocultos.',
                'cat-readme-3': '¡Explora y diviértete!',
                'cat-secrets-1': '🔐 Archivo encriptado. Acceso denegado.',
                'cat-secrets-2': '💡 Pista: Prueba comandos musicales...',
                'cat-not-found': '❌ Archivo \'{file}\' no encontrado.',
                
                // Echo Command
                'echo-usage': '❌ Uso: echo <mensaje>',
                
                // Cowsay Command
                'cowsay-default': 'CodAlea es genial!',
                
                // Secret Commands
                'secret-tron': '🎮 Iniciar simulación TRON: Legacy - Derezzed',
                'secret-thriller': '🕺 Iniciar simulación Michael Jackson - Thriller',
                'secret-codalea': '🚀 Mostrar información de CodAlea',
                'secret-matrix': '💊 Entrar en la Matrix',
                'secret-konami': '🎯 Código Konami detectado',
                
                // Matrix Mode
                'matrix-pill': '💊 Eligiendo la píldora roja...',
                'matrix-connecting': '🌐 Conectando a la Matrix...',
                'matrix-welcome': '👁️ Bienvenido a la Matrix, Neo.',
                'matrix-access': '🔓 Acceso total desbloqueado.',
                'matrix-doors': '🚪 Todas las puertas están abiertas.',
                
                // Konami Code
                'konami-activated': '🎯 ¡CÓDIGO KONAMI ACTIVADO!',
                'konami-powers': '🚀 Todos los poderes desbloqueados!',
                'konami-god': '🎮 Modo Dios activado por 30 segundos!',
                'konami-deactivated': '⏰ Modo Dios desactivado. ¡Fue divertido!',
                
                // CodAlea Info
                'info-header': '🚀 CodAlea System Information',
                'info-separator': '==========================',
                'info-innovation': '💡 Innovación: ████████████ 100%',
                'info-speed': '⚡ Velocidad:   ████████████ 100%',
                'info-creativity': '🎨 Creatividad: ████████████ 100%',
                'info-coffee': '☕ Café:        ████████████ 100%',
                'info-status': '🌟 Estado: REVOLUCIONANDO EL CÓDIGO',
                'info-mission': '🔥 Misión: CREAR EL FUTURO',
                'info-nextstep': '✨ Próximo paso: CONQUISTAR LA GALAXIA',
                
                // Time Format (Spanish)
                'time-weekdays': ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
                'time-months': ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
                
                // Jokes
                'joke-1': '¿Por qué los programadores prefieren el café? Porque el té es para testing! ☕',
                'joke-2': '¿Cuántos programadores se necesitan para cambiar una bombilla? Ninguno, es un problema de hardware 💡',
                'joke-3': '99 bugs in the code, 99 bugs... take one down, patch it around, 127 bugs in the code 🐛',
                'joke-4': 'Error 404: Chiste no encontrado, pero aquí tienes uno gratis! 😄',
                'joke-5': '¿Por qué los programadores odian la naturaleza? Porque tiene demasiados bugs! 🌿🐛',
                
                // Quotes
                'quote-1': '"El código es poesía." - CodAlea Team 📝',
                'quote-2': '"La innovación distingue entre un líder y un seguidor." - Steve Jobs 🍎',
                'quote-3': '"El software es como el sexo: es mejor cuando es gratis." - Linus Torvalds 🐧',
                'quote-4': '"Medir el progreso del software por líneas de código es como medir el progreso de la construcción de aviones por peso." - Bill Gates ✈️',
                'quote-5': '"En CodAlea, convertimos café en código y sueños en realidad." - CodAlea Philosophy ☕',
                
                // Games
                'game-tron-title': '🎮 CodAlea Presents: TRON Legacy Grid',
                'game-thriller-title': '🕺 CodAlea Presents: Thriller Dance Battle',
                'game-dev-status': '[ GAME IN DEVELOPMENT - Beta v0.2.2025 ]',
                'game-alpha-status': '[ GAME IN DEVELOPMENT - Alpha v0.1.2025 ]',
                'game-tron-quote': '💫 "I fight for the users..." 💫',
                'game-thriller-quote': '🎵 "It\'s close to midnight..." 🎵',
                'game-energy': '⚡ ENERGY',
                'game-circuit': '🏁 CIRCUIT',
                'game-bikes': '🏍️ BIKES',
                'game-dance-moves': '💃 DANCE MOVES',
                'game-sync-level': '⭐ SYNC LEVEL',
                'game-zombies': '🧟‍♂️ ZOMBIES',
                'game-gameplay': '🎮 GAMEPLAY PREVIEW:',
                'game-tron-controls': '• WASD to control your light cycle 🏍️💙\n• Create light walls to trap opponents ⚡\n• Survive in the digital arena! 🌐\n• Enter the Grid and fight for freedom 🔓',
                'game-thriller-controls': '• Press SPACE to sync with the beat 🎵\n• Arrow keys to perform dance moves ⬅️➡️⬆️⬇️\n• Transform villagers into dancing zombies! 🧟‍♂️💃\n• Survive until dawn breaks 🌅',
                'game-dev-progress': '🏗️ DESARROLLO EN PROGRESO',
                'game-tron-features': '⚡ CodAlea está creando la experiencia definitiva de TRON\n🎯 Próximas características: Arena 3D, Disc Combat, Identity Disc Battles\n💡 ¿Sugerencias? Contáctanos en info@codalea.com',
                'game-thriller-features': '⚡ CodAlea está creando la experiencia definitiva de Thriller\n🎯 Próximas características: Multijugador, Leaderboards, VR Support\n💡 ¿Ideas? Contáctanos en info@codalea.com',
                'game-music-playing': '🎵 {song} sonando en bucle',
                'game-tech-info': '🎬 Este será un juego completo desarrollado por CodAlea\n💻 Tecnologías: ASP.NET Core, Three.js, WebGL 2.0\n📅 Estado: Beta | ETA: Q3 2025',
                'game-tech-info-thriller': '🎬 Este será un juego completo desarrollado por CodAlea\n💻 Tecnologías: ASP.NET Core, JavaScript, WebGL\n📅 Estado: Pre-Alpha | ETA: Q4 2025',
                'game-commands-available': '💡 Comandos disponibles: stop, volume, mute, unmute'
            },
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-features': 'Why CodAlea',
                'nav-about': 'About Us',
                'nav-contact': 'Contact Us',
                
                // Hero Section
                'hero-title-transform': 'Transform Your',
                'hero-title-code': 'Code',
                'hero-subtitle': 'Innovative solutions for modern development',
                'hero-welcome': 'Welcome to CodAlea - Where Code Meets Innovation',
                'hero-cta': 'Discover More',
                
                // Features Section
                'features-title': 'Why Choose',
                'features-subtitle': 'CodAlea',
                'features-lead': 'Discover the advantages that make us unique in the software development world',
                
                'feature-innovation-title': 'Continuous Innovation',
                'feature-innovation-desc': 'We use the latest technologies and best practices to create solutions that stand out in the market.',
                'feature-innovation-badge': 'Innovation',
                
                'feature-scalability-title': 'Enterprise Scalability',
                'feature-scalability-desc': 'Our architectures are designed to grow with you, from startup to enterprise.',
                'feature-scalability-badge': 'Scalable',
                
                'feature-performance-title': 'Optimal Performance',
                'feature-performance-desc': 'Optimized code and efficient architectures that guarantee the best user experience.',
                'feature-performance-badge': 'Performance',
                
                // About Section
                'about-title': 'About Us',
                'about-lead': 'We are a passionate team of developers and software architects, specialists in creating <strong>enterprise-class</strong> digital solutions that transform innovative ideas into robust technological realities.',
                'about-description': 'With more than <strong>10 years of experience</strong> in the Microsoft ecosystem and modern technologies, we design scalable architectures, high availability systems and applications that support millions of daily transactions.',
                'about-projects': 'Projects Delivered',
                'about-experience': 'Years of Experience',
                'about-uptime': 'Guaranteed Uptime',
                
                // Tech Categories
                'tech-backend': 'Backend & APIs',
                'tech-database': 'Databases',
                'tech-frontend': 'Frontend & UX',
                'tech-devops': 'DevOps & Cloud',
                
                // Methodology
                'methodology-agile': 'Agile Methodologies',
                'methodology-quality': 'Quality Assurance',
                'methodology-architecture': 'Software Architecture',
                
                // Skills
                'skills-title': 'Soft Skills & Competencies',
                'skill-problem-solving': 'Problem-solving',
                'skill-analytical': 'Analytical thinking',
                'skill-teamwork': 'Teamwork',
                'skill-leadership': 'Leadership',
                'skill-adaptability': 'Adaptability',
                'skill-remote': 'Remote collaboration',
                
                // Contact Section
                'contact-title': 'Contact Us',
                'contact-lead': 'Have a project in mind? Let\'s connect and transform your ideas into <strong>extraordinary code</strong>.',
                
                'contact-email-title': 'Email',
                'contact-email-desc': 'Send us your inquiry',
                'contact-email-hover': 'Hover for details',
                'contact-email-header': 'Email',
                'contact-email-response': '24h response',
                'contact-email-consultation': 'Free consultation',
                'contact-email-ideas': 'Innovative ideas',
                'contact-email-action': 'Send Email',
                
                'contact-whatsapp-title': 'WhatsApp',
                'contact-whatsapp-desc': 'Chat directly with us',
                'contact-whatsapp-header': 'WhatsApp Business',
                'contact-whatsapp-realtime': 'Real-time chat',
                'contact-whatsapp-available': 'Available 24/7',
                'contact-whatsapp-support': 'Personalized support',
                'contact-whatsapp-action': 'Start Chat',
                
                // Additional Contact Info
                'info-location': 'Location',
                'info-location-text': 'Colombia, Bogotá.',
                'info-schedule': 'Schedule',
                'info-schedule-text': 'Mon - Fri: 8:00 AM - 5:00 PM',
                'info-consultation': 'Consultation',
                'info-consultation-text': 'First session free',
                'info-projects': 'Projects',
                'info-projects-text': 'From MVPs to Enterprise',
                
                // Footer
                'footer-text': 'Innovating the Future of Code',
                
                // Language
                'language-spanish': 'Español',
                'language-english': 'English',
                
                // Retro Console
                'console-title': 'CodAlea Terminal',
                'console-placeholder': 'Type a command...',
                'console-prompt': 'CodAlea@retro:~$',
                'console-toggle-title': 'Open/Close CodAlea Console - Watch the epic chase!',
                
                // Boot Messages
                'boot-header': '║        CodAlea RetroOS v2.0          ║\n║        8-bit Command System         ║',
                'boot-initializing': '🔥 Initializing system...',
                'boot-loading': '⚡ Loading innovation drivers...',
                'boot-connecting': '🚀 Connecting to code Matrix...',
                'boot-ready': '✨ System ready for commands!',
                'boot-hint': '💡 Psst, at CodAlea we love puzzles...',
                'boot-hint2': '🎮 You have a little hint: you can type\n   \'playthrone\' or \'playthriller\' 😉',
                'boot-help': 'Type \'help\' to see available commands.',
                
                // Commands and Messages
                'command-not-recognized': '❌ Command \'{cmd}\' not recognized. Type \'help\' to see available commands.',
                'command-suggest': '💡 Did you mean: {suggestions}?',
                'command-matches': 'Matches: {matches}',
                'console-cleared': 'Console cleared. ✨',
                'audio-stopped': '🔇 Audio stopped',
                'audio-playing': '🎵 Playing: {description}',
                'audio-volume': '🔊 Volume: {volume}%',
                'audio-loop': '🔄 Mode: Infinite loop',
                'audio-tip': '💡 Tip: Press Esc or close console to stop',
                'audio-error': '❌ Error playing audio: {error}',
                'audio-file-error': '🔍 Check that file exists in /mp3songs/',
                'volume-adjusted': '🔊 Volume adjusted to: {volume}%',
                'volume-current': '🔊 Current volume: {volume}%',
                'volume-usage': '💡 Usage: volume <0-100>',
                'volume-invalid': '❌ Invalid volume. Use a number between 0-100',
                
                // Help Command
                'help-title': '🔧 Available commands:',
                'help-basic': '  help     - Show this help\n  clear    - Clear console\n  about    - About CodAlea\n  version  - System version\n  credits  - Team credits\n  time     - Current time\n  joke     - Random joke\n  quote    - Inspirational quote\n  stats    - System statistics\n  easter   - Show easter eggs\n  whoami   - Who are you?\n  echo     - Repeat text\n  cowsay   - ASCII art with message',
                'help-audio': '🎵 Audio commands:\n  stop     - Stop current music\n  volume   - View/change volume (0-100)\n  mute     - Mute audio\n  unmute   - Restore volume',
                'help-special': '🎮 Special commands:\n  There are secret commands... can you find them? 😉',
                'help-shortcuts': '⌨️  Shortcuts:\n  ↑/↓      - Command history\n  Tab      - Autocomplete\n  Ctrl+`   - Open/close console\n  Esc      - Close console and stop audio',
                
                // About Command
                'about-company': '🚀 CodAlea - Innovating the future of code',
                'about-desc1': 'We are a company dedicated to creating',
                'about-desc2': 'innovative technological solutions and',
                'about-desc3': 'exceptional digital experiences. We combine',
                'about-desc4': 'passion for code with creativity and a retro touch.',
                'about-mission': '🌟 Our mission: Transform ideas into reality',
                'about-vision': '💡 Our vision: A more connected world',
                'about-values': '⚡ Our values: Innovation, quality, fun',
                'about-website': 'Visit: www.codalea.com 🌐',
                
                // Version Command
                'version-os': 'CodAlea RetroOS v2.0.2025',
                'version-build': 'Build: 20250703-retro-edition',
                'version-kernel': 'Kernel: CodAlea-Core 8.0',
                'version-powered': '💚 Powered by love and coffee',
                
                // Credits Command
                'credits-title': '🎨 CodAlea Development Team',
                'credits-lead': '👨‍💻 Lead Developer: Jonatham',
                'credits-sound': '🎵 Sound Design: Retro Synth AI',
                'credits-game': '🎮 Game Logic: 8-bit Masters',
                'credits-ui': '🎨 UI/UX: Pixel Art Collective',
                'credits-coffee': '☕ Coffee Provider: Local Café',
                'credits-thanks': '🙏 Special thanks to:',
                'credits-mj': '- Michael Jackson (Thriller inspiration)',
                'credits-dp': '- Daft Punk (TRON inspiration)',
                'credits-net': '- The .NET community',
                'credits-beta': '- All beta testers',
                'credits-made': '💙 Made with love at CodAlea',
                
                // Stats Command
                'stats-title': '📊 CodAlea System Statistics:',
                'stats-commands': '⚡ Commands executed: {count}',
                'stats-uptime': '🕒 Uptime: {uptime}',
                'stats-memory': '💾 Memory used: {memory}%',
                'stats-cpu': '🔥 CPU: {cpu}%',
                'stats-connectivity': '🌐 Connectivity: ONLINE',
                'stats-status': '🚀 Status: OPTIMAL',
                'stats-easter': '🎮 Easter eggs found: ¿?',
                'stats-fun': '💡 Fun level: 9000+',
                
                // Easter Eggs Command
                'easter-title': '🥚 Available Easter Eggs:',
                'easter-music': '🎵 There are hidden musical commands...',
                'easter-games': '🎮 Some are related to classic games...',
                'easter-movies': '💊 Others with iconic movies...',
                'easter-sequences': '🥋 And some require special sequences...',
                'easter-hint': '💡 Hint: \'play\' + something might work... 😉',
                
                // WhoAmI Command
                'whoami-user': '🤖 You are a CodAlea RetroOS user',
                'whoami-privileges': '🌟 Privileges: ADMIN',
                'whoami-level': '🎯 Level: Retro Hacker',
                'whoami-terminal': '💻 Terminal: CodAlea Console v2.0',
                'whoami-id': '🔑 ID: {id}',
                
                // Path Command
                'path-current': '/home/codalea/retro-system/',
                
                // List Files Command
                'ls-projects': '📁 projects/',
                'ls-games': '📁 games/',
                'ls-music': '📁 music/',
                'ls-readme': '📄 readme.txt',
                'ls-secrets': '📄 secrets.encrypted',
                'ls-easter': '📄 easter-eggs.hidden',
                'ls-thriller': '🎮 thriller.game',
                'ls-tron': '🎮 tron.game',
                'ls-core': '💾 codalea.core',
                
                // Cat Command
                'cat-usage': '❌ Usage: cat <file>',
                'cat-readme-1': 'Welcome to CodAlea RetroOS! 🚀',
                'cat-readme-2': 'This system contains hidden easter eggs.',
                'cat-readme-3': 'Explore and have fun!',
                'cat-secrets-1': '🔐 Encrypted file. Access denied.',
                'cat-secrets-2': '💡 Hint: Try musical commands...',
                'cat-not-found': '❌ File \'{file}\' not found.',
                
                // Echo Command
                'echo-usage': '❌ Usage: echo <message>',
                
                // Cowsay Command
                'cowsay-default': 'CodAlea is awesome!',
                
                // Secret Commands
                'secret-tron': '🎮 Start TRON: Legacy - Derezzed simulation',
                'secret-thriller': '🕺 Start Michael Jackson - Thriller simulation',
                'secret-codalea': '🚀 Show CodAlea information',
                'secret-matrix': '💊 Enter the Matrix',
                'secret-konami': '🎯 Konami Code detected',
                
                // Matrix Mode
                'matrix-pill': '💊 Taking the red pill...',
                'matrix-connecting': '🌐 Connecting to the Matrix...',
                'matrix-welcome': '👁️ Welcome to the Matrix, Neo.',
                'matrix-access': '🔓 Full access unlocked.',
                'matrix-doors': '🚪 All doors are open.',
                
                // Konami Code
                'konami-activated': '🎯 KONAMI CODE ACTIVATED!',
                'konami-powers': '🚀 All powers unlocked!',
                'konami-god': '🎮 God mode activated for 30 seconds!',
                'konami-deactivated': '⏰ God mode deactivated. That was fun!',
                
                // CodAlea Info
                'info-header': '🚀 CodAlea System Information',
                'info-separator': '==========================',
                'info-innovation': '💡 Innovation: ████████████ 100%',
                'info-speed': '⚡ Speed:       ████████████ 100%',
                'info-creativity': '🎨 Creativity:  ████████████ 100%',
                'info-coffee': '☕ Coffee:      ████████████ 100%',
                'info-status': '🌟 Status: REVOLUTIONIZING CODE',
                'info-mission': '🔥 Mission: CREATE THE FUTURE',
                'info-nextstep': '✨ Next step: CONQUER THE GALAXY',
                
                // Time Format (English)
                'time-weekdays': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'time-months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                
                // Jokes
                'joke-1': 'Why do programmers prefer coffee? Because tea is for testing! ☕',
                'joke-2': 'How many programmers does it take to change a light bulb? None, it\'s a hardware problem 💡',
                'joke-3': '99 bugs in the code, 99 bugs... take one down, patch it around, 127 bugs in the code 🐛',
                'joke-4': 'Error 404: Joke not found, but here\'s a free one! 😄',
                'joke-5': 'Why do programmers hate nature? Because it has too many bugs! 🌿🐛',
                
                // Quotes
                'quote-1': '"Code is poetry." - CodAlea Team 📝',
                'quote-2': '"Innovation distinguishes between a leader and a follower." - Steve Jobs 🍎',
                'quote-3': '"Software is like sex: it\'s better when it\'s free." - Linus Torvalds 🐧',
                'quote-4': '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates ✈️',
                'quote-5': '"At CodAlea, we turn coffee into code and dreams into reality." - CodAlea Philosophy ☕',
                
                // Games
                'game-tron-title': '🎮 CodAlea Presents: TRON Legacy Grid',
                'game-thriller-title': '🕺 CodAlea Presents: Thriller Dance Battle',
                'game-dev-status': '[ GAME IN DEVELOPMENT - Beta v0.2.2025 ]',
                'game-alpha-status': '[ GAME IN DEVELOPMENT - Alpha v0.1.2025 ]',
                'game-tron-quote': '💫 "I fight for the users..." 💫',
                'game-thriller-quote': '🎵 "It\'s close to midnight..." 🎵',
                'game-energy': '⚡ ENERGY',
                'game-circuit': '🏁 CIRCUIT',
                'game-bikes': '🏍️ BIKES',
                'game-dance-moves': '💃 DANCE MOVES',
                'game-sync-level': '⭐ SYNC LEVEL',
                'game-zombies': '🧟‍♂️ ZOMBIES',
                'game-gameplay': '🎮 GAMEPLAY PREVIEW:',
                'game-tron-controls': '• WASD to control your light cycle 🏍️💙\n• Create light walls to trap opponents ⚡\n• Survive in the digital arena! 🌐\n• Enter the Grid and fight for freedom 🔓',
                'game-thriller-controls': '• Press SPACE to sync with the beat 🎵\n• Arrow keys to perform dance moves ⬅️➡️⬆️⬇️\n• Transform villagers into dancing zombies! 🧟‍♂️💃\n• Survive until dawn breaks 🌅',
                'game-dev-progress': '🏗️ DEVELOPMENT IN PROGRESS',
                'game-tron-features': '⚡ CodAlea is creating the ultimate TRON experience\n🎯 Upcoming features: 3D Arena, Disc Combat, Identity Disc Battles\n💡 Suggestions? Contact us at info@codalea.com',
                'game-thriller-features': '⚡ CodAlea is creating the ultimate Thriller experience\n🎯 Upcoming features: Multiplayer, Leaderboards, VR Support\n💡 Ideas? Contact us at info@codalea.com',
                'game-music-playing': '🎵 {song} playing on loop',
                'game-tech-info': '🎬 This will be a complete game developed by CodAlea\n💻 Technologies: ASP.NET Core, Three.js, WebGL 2.0\n📅 Status: Beta | ETA: Q3 2025',
                'game-tech-info-thriller': '🎬 This will be a complete game developed by CodAlea\n💻 Technologies: ASP.NET Core, JavaScript, WebGL\n📅 Status: Pre-Alpha | ETA: Q4 2025',
                'game-commands-available': '💡 Available commands: stop, volume, mute, unmute'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageSwitcher();
        this.applyLanguage(this.currentLanguage);
        this.updateWelcomeText();
        this.updateWhatsAppLink();
    }
    
    createLanguageSwitcher() {
        const navbar = document.querySelector('.navbar-collapse .navbar-nav');
        if (!navbar) return;
        
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher ms-auto';
        languageSwitcher.innerHTML = `
            <div class="language-toggle" id="languageToggle">
                <div class="language-flag" id="currentFlag">🇪🇸</div>
                <span id="currentLang">ES</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style="transition: transform 0.3s ease;">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="language-dropdown" id="languageDropdown">
                <div class="language-option" data-lang="es">
                    <div class="language-flag">🇪🇸</div>
                    <div>
                        <div class="language-name" data-translate="language-spanish">Español</div>
                    </div>
                </div>
                <div class="language-option" data-lang="en">
                    <div class="language-flag">🇺🇸</div>
                    <div>
                        <div class="language-name" data-translate="language-english">English</div>
                    </div>
                </div>
            </div>
        `;
        
        navbar.appendChild(languageSwitcher);
        
        this.bindEvents();
    }
    
    bindEvents() {
        const toggle = document.getElementById('languageToggle');
        const dropdown = document.getElementById('languageDropdown');
        const options = dropdown.querySelectorAll('.language-option');
        
        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
            const arrow = toggle.querySelector('svg');
            arrow.style.transform = dropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
            const arrow = toggle.querySelector('svg');
            arrow.style.transform = 'rotate(0deg)';
        });
        
        // Language selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.switchLanguage(lang);
                dropdown.classList.remove('show');
                const arrow = toggle.querySelector('svg');
                arrow.style.transform = 'rotate(0deg)';
            });
        });
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('codalea-language', lang);
        
        // Update flag and language display
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        
        if (lang === 'es') {
            currentFlag.textContent = '🇪🇸';
            currentLang.textContent = 'ES';
        } else {
            currentFlag.textContent = '🇺🇸';
            currentLang.textContent = 'EN';
        }
        
        // Update active state
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
        
        // Apply translations
        this.applyLanguage(lang);
        this.updateWelcomeText();
        this.updateWhatsAppLink();
        
        // Notify console and other listeners
        this.notifyLanguageChange();
        
        // Add transition effect
        this.addTransitionEffect();
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.innerHTML.includes('<strong>')) {
                    element.innerHTML = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // Update document title
        const titleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.textContent = lang === 'es' ? 'Inicio - CodAlea' : 'Home - CodAlea';
        }
        
        // Update meta lang attribute
        document.documentElement.lang = lang;
        
        // Update active language option
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
    }
    
    updateWelcomeText() {
        const welcomeTextElement = document.querySelector('.welcome-text');
        if (welcomeTextElement) {
            const text = this.translations[this.currentLanguage]['hero-welcome'];
            
            // Clear current text
            welcomeTextElement.textContent = '';
            welcomeTextElement.style.opacity = '1';
            
            // Typing effect
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    welcomeTextElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 300);
        }
    }
    
    updateWhatsAppLink() {
        const whatsappLink = document.querySelector('a[href*="wa.me"]');
        if (whatsappLink) {
            const message = this.currentLanguage === 'es' 
                ? '¡Hola%20CodAlea!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios.'
                : 'Hello%20CodAlea!%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.';
            
            whatsappLink.href = `https://wa.me/573229136825?text=${message}`;
        }
    }
    
    addTransitionEffect() {
        // Add subtle transition effect to content
        const content = document.querySelector('main');
        if (content) {
            content.style.opacity = '0.7';
            content.style.transform = 'translateY(10px)';
            content.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 150);
            
            setTimeout(() => {
                content.style.transition = '';
            }, 450);
        }
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Method for console to get translated text
    getTranslation(key, replacements = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
        
        // Handle replacements
        for (const [placeholder, value] of Object.entries(replacements)) {
            text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), value);
        }
        
        return text;
    }
    
    // Method to get random joke
    getRandomJoke() {
        const jokes = [
            this.getTranslation('joke-1'),
            this.getTranslation('joke-2'),
            this.getTranslation('joke-3'),
            this.getTranslation('joke-4'),
            this.getTranslation('joke-5')
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Method to get random quote
    getRandomQuote() {
        const quotes = [
            this.getTranslation('quote-1'),
            this.getTranslation('quote-2'),
            this.getTranslation('quote-3'),
            this.getTranslation('quote-4'),
            this.getTranslation('quote-5')
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    // Method to format time based on current language
    formatTime(date) {
        if (this.currentLanguage === 'es') {
            return date.toLocaleString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        } else {
            return date.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }
    
    // Listen for language changes and notify console
    addLanguageChangeListener(callback) {
        this.languageChangeListeners = this.languageChangeListeners || [];
        this.languageChangeListeners.push(callback);
    }
    
    // Notify listeners when language changes
    notifyLanguageChange() {
        if (this.languageChangeListeners) {
            this.languageChangeListeners.forEach(callback => callback(this.currentLanguage));
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}
