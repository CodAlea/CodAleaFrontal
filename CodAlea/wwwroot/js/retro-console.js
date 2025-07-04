// CodAlea Retro Console - Sistema de comandos interactivo 8-bits
class CodAleaRetroConsole {
    constructor() {
        this.isActive = false;
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentCommand = '';
        this.isProcessing = false;
        
        // Language support
        this.languageSwitcher = null;
        this.waitForLanguageSwitcher();
        
        // Sistema de audio
        this.currentAudio = null;
        this.audioVolume = 0.8; // 80% de volumen
        
        // Easter eggs y comandos especiales
        this.secretCommands = {
            'playthrone': {
                description: () => this.t('secret-tron'),
                action: () => this.launchTronGame()
            },
            'playthriller': {
                description: () => this.t('secret-thriller'),
                action: () => this.launchThrillerGame()
            },
            'codalea': {
                description: () => this.t('secret-codalea'),
                action: () => this.showCodAleaInfo()
            },
            'matrix': {
                description: () => this.t('secret-matrix'),
                action: () => this.activateMatrixMode()
            },
            'konami': {
                description: () => this.t('secret-konami'),
                action: () => this.konamiCode()
            }
        };
        
        // Comandos básicos
        this.basicCommands = {
            'help': () => this.showHelp(),
            'clear': () => this.clearConsole(),
            'about': () => this.showAbout(),
            'version': () => this.showVersion(),
            'credits': () => this.showCredits(),
            'time': () => this.showTime(),
            'joke': () => this.showRandomJoke(),
            'quote': () => this.showRandomQuote(),
            'stats': () => this.showStats(),
            'easter': () => this.showEasterEggs(),
            'whoami': () => this.showWhoAmI(),
            'pwd': () => this.showPath(),
            'ls': () => this.listFiles(),
            'cat': (args) => this.catFile(args),
            'echo': (args) => this.echo(args),
            'cowsay': (args) => this.cowsay(args),
            'stop': () => this.stopAudio(),
            'volume': (args) => this.volumeControl(args),
            'mute': () => this.adjustVolume(0),
            'unmute': () => this.adjustVolume(0.8)
        };
        
        // Boot messages are now generated dynamically
        this.initializeConsole();
    }
    
    // Generate boot messages dynamically based on current language
    getBootMessages() {
        return [
            "╔══════════════════════════════════════╗",
            this.t('boot-header'),
            "╚══════════════════════════════════════╝",
            "",
            this.t('boot-initializing'),
            this.t('boot-loading'),
            this.t('boot-connecting'),
            this.t('boot-ready'),
            "",
            this.t('boot-hint'),
            this.t('boot-hint2'),
            "",
            this.t('boot-help')
        ];
    }
    
    // Language support methods
    waitForLanguageSwitcher() {
        const checkForLanguageSwitcher = () => {
            if (window.languageSwitcher) {
                this.languageSwitcher = window.languageSwitcher;
                this.languageSwitcher.addLanguageChangeListener(() => {
                    this.updateConsoleLanguage();
                });
            } else {
                setTimeout(checkForLanguageSwitcher, 100);
            }
        };
        checkForLanguageSwitcher();
    }
    
    // Translation helper method
    t(key, replacements = {}) {
        if (this.languageSwitcher) {
            return this.languageSwitcher.getTranslation(key, replacements);
        }
        return key; // Fallback to key if no language switcher
    }
    
    // Update console language
    updateConsoleLanguage() {
        // Update console title if visible
        const consoleTitle = document.querySelector('.console-title span');
        if (consoleTitle) {
            consoleTitle.textContent = `🖥️ ${this.t('console-title')}`;
        }
        
        // Update input placeholder
        const consoleInput = document.getElementById('console-input');
        if (consoleInput) {
            consoleInput.placeholder = this.t('console-placeholder');
        }
        
        // Update prompt if needed
        const consolePrompt = document.querySelector('.console-prompt');
        if (consolePrompt) {
            consolePrompt.textContent = this.t('console-prompt');
        }
        
        // Update toggle button title
        const toggleButton = document.getElementById('console-toggle');
        if (toggleButton) {
            toggleButton.title = this.t('console-toggle-title');
        }
    }
    
    initializeConsole() {
        this.createConsoleHTML();
        this.setupEventListeners();
        this.createToggleButton();
    }
    
    createConsoleHTML() {
        // Crear contenedor principal
        const container = document.createElement('div');
        container.className = 'retro-console-container';
        container.id = 'codalea-retro-console';
        
        container.innerHTML = `
            <div class="console-header">
                <div class="console-title">
                    <span>🖥️ ${this.t('console-title')}</span>
                </div>
                <div class="console-controls">
                    <button class="console-btn minimize" title="Minimizar"></button>
                    <button class="console-btn maximize" title="Maximizar"></button>
                    <button class="console-btn close" title="Cerrar"></button>
                </div>
            </div>
            <div class="console-output" id="console-output"></div>
            <div class="console-input-area">
                <span class="console-prompt">${this.t('console-prompt')}</span>
                <input type="text" class="console-input" id="console-input" 
                       placeholder="${this.t('console-placeholder')}" autocomplete="off">
            </div>
        `;
        
        document.body.appendChild(container);
        
        // Crear modal para juegos
        this.createGameModal();
    }
    
    createGameModal() {
        const modal = document.createElement('div');
        modal.className = 'game-modal';
        modal.id = 'game-modal';
        
        modal.innerHTML = `
            <div class="game-container">
                <div class="game-header">
                    <span id="game-title">🎮 CodAlea Retro Games</span>
                    <button class="game-close" onclick="codAleaConsole.closeGame()">×</button>
                </div>
                <div class="game-area" id="game-area">
                    <div>Selecciona un juego...</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    createToggleButton() {
        const button = document.createElement('button');
        button.className = 'console-toggle';
        button.id = 'console-toggle';
        button.title = this.t('console-toggle-title');
        
        // Crear el contenido del botón con la animación
        button.innerHTML = `
            <div class="console-toggle-animation">
                <div class="zombie-chaser-mini">🧟‍♂️</div>
                <div class="tron-bike-mini">🏍️</div>
                <div class="console-icon">💻</div>
            </div>
        `;
        
        document.body.appendChild(button);
        
        // Agregar efectos adicionales cuando se pasa el mouse
        button.addEventListener('mouseenter', () => {
            const zombieChaser = button.querySelector('.zombie-chaser-mini');
            const tronBike = button.querySelector('.tron-bike-mini');
            const consoleIcon = button.querySelector('.console-icon');
            
            // Acelerar las animaciones en hover
            zombieChaser.style.animationDuration = '0.8s';
            tronBike.style.animationDuration = '1s';
            consoleIcon.style.animationDuration = '2s';
            
            // Cambiar ocasionalmente los emojis
            if (Math.random() < 0.3) {
                const zombieEmojis = ['🧟‍♂️', '🧟‍♀️', '👻', '💀'];
                const bikeEmojis = ['🏍️', '🚴‍♂️', '🛵', '🏃‍♂️💨'];
                
                zombieChaser.textContent = zombieEmojis[Math.floor(Math.random() * zombieEmojis.length)];
                tronBike.textContent = bikeEmojis[Math.floor(Math.random() * bikeEmojis.length)];
            }
        });
        
        button.addEventListener('mouseleave', () => {
            const zombieChaser = button.querySelector('.zombie-chaser-mini');
            const tronBike = button.querySelector('.tron-bike-mini');
            const consoleIcon = button.querySelector('.console-icon');
            
            // Restaurar velocidades normales
            zombieChaser.style.animationDuration = '2.5s';
            tronBike.style.animationDuration = '3s';
            consoleIcon.style.animationDuration = '4s';
            
            // Restaurar emojis originales
            zombieChaser.textContent = '🧟‍♂️';
            tronBike.textContent = '🏍️';
        });
    }
    
    setupEventListeners() {
        // Toggle button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'console-toggle') {
                this.toggle();
            }
            
            // Botones de control de la consola
            if (e.target.classList.contains('console-btn')) {
                if (e.target.classList.contains('close')) {
                    this.close();
                } else if (e.target.classList.contains('minimize')) {
                    this.minimize();
                } else if (e.target.classList.contains('maximize')) {
                    this.maximize();
                }
            }
        });
        
        // Input de comandos
        document.addEventListener('keydown', (e) => {
            if (this.isActive) {
                const input = document.getElementById('console-input');
                if (document.activeElement === input) {
                    this.handleKeydown(e);
                }
            }
            
            // Atajo de teclado para abrir consola (Ctrl + `)
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                this.toggle();
            }
        });
        
        // Detectar Konami Code
        this.setupKonamiCode();
    }
    
    setupKonamiCode() {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.secretCommands.konami.action();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }
    
    handleKeydown(e) {
        const input = document.getElementById('console-input');
        
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                this.processCommand(input.value.trim());
                input.value = '';
                this.historyIndex = -1;
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory('up');
                break;
                
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory('down');
                break;
                
            case 'Tab':
                e.preventDefault();
                this.autoComplete(input.value);
                break;
                
            case 'Escape':
                e.preventDefault();
                this.close();
                break;
        }
    }
    
    navigateHistory(direction) {
        const input = document.getElementById('console-input');
        
        if (direction === 'up' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
        } else if (direction === 'down' && this.historyIndex > 0) {
            this.historyIndex--;
            input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
        } else if (direction === 'down' && this.historyIndex === 0) {
            this.historyIndex = -1;
            input.value = '';
        }
    }
    
    autoComplete(partial) {
        const commands = [...Object.keys(this.basicCommands), ...Object.keys(this.secretCommands)];
        const matches = commands.filter(cmd => cmd.startsWith(partial.toLowerCase()));
        
        if (matches.length === 1) {
            document.getElementById('console-input').value = matches[0];
        } else if (matches.length > 1) {
            this.addOutput(this.t('command-matches', { matches: matches.join(', ') }), 'system');
        }
    }
    
    processCommand(command) {
        if (!command) return;
        
        this.commandHistory.push(command);
        this.addOutput(`CodAlea@retro:~$ ${command}`, 'user');
        
        const [cmd, ...args] = command.toLowerCase().split(' ');
        
        // Verificar comandos secretos primero
        if (this.secretCommands[cmd]) {
            this.addOutput(this.secretCommands[cmd].description(), 'success');
            setTimeout(() => {
                this.secretCommands[cmd].action();
            }, 500);
            return;
        }
        
        // Verificar comandos básicos
        if (this.basicCommands[cmd]) {
            this.basicCommands[cmd](args);
            return;
        }
        
        // Comando no reconocido
        this.addOutput(this.t('command-not-recognized', { cmd: cmd }), 'error');
        
        // Sugerencias basadas en similitud
        this.suggestCommand(cmd);
    }
    
    suggestCommand(cmd) {
        const allCommands = [...Object.keys(this.basicCommands), ...Object.keys(this.secretCommands)];
        const suggestions = allCommands.filter(c => 
            c.includes(cmd) || cmd.includes(c) || this.levenshteinDistance(cmd, c) <= 2
        );
        
        if (suggestions.length > 0) {
            this.addOutput(this.t('command-suggest', { suggestions: suggestions.slice(0, 3).join(', ') }), 'warning');
        }
    }
    
    levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }
    
    addOutput(text, type = 'normal') {
        const output = document.getElementById('console-output');
        const line = document.createElement('div');
        line.className = `console-line ${type}`;
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
    
    // Comandos básicos
    showHelp() {
        const commands = [
            this.t('help-title'),
            this.t('help-basic'),
            "",
            this.t('help-audio'),
            "",
            this.t('help-special'),
            "",
            this.t('help-shortcuts')
        ];
        
        commands.forEach(cmd => this.addOutput(cmd, 'system'));
    }
    
    clearConsole() {
        document.getElementById('console-output').innerHTML = '';
        this.addOutput(this.t('console-cleared'), 'success');
    }
    
    showAbout() {
        const aboutText = [
            this.t('about-company'),
            "",
            this.t('about-desc1'),
            this.t('about-desc2'),
            this.t('about-desc3'),
            this.t('about-desc4'),
            "",
            this.t('about-mission'),
            this.t('about-vision'),
            this.t('about-values'),
            "",
            this.t('about-website')
        ];
        
        aboutText.forEach(text => this.addOutput(text, 'system'));
    }
    
    showVersion() {
        this.addOutput(this.t('version-os'), 'system');
        this.addOutput(this.t('version-build'), 'system');
        this.addOutput(this.t('version-kernel'), 'system');
        this.addOutput(this.t('version-powered'), 'success');
    }
    
    showCredits() {
        const credits = [
            this.t('credits-title'),
            "",
            this.t('credits-lead'),
            this.t('credits-sound'),
            this.t('credits-game'),
            this.t('credits-ui'),
            this.t('credits-coffee'),
            "",
            this.t('credits-thanks'),
            this.t('credits-mj'),
            this.t('credits-dp'),
            this.t('credits-net'),
            this.t('credits-beta'),
            "",
            this.t('credits-made')
        ];
        
        credits.forEach(credit => this.addOutput(credit, 'system'));
    }
    
    showTime() {
        const now = new Date();
        const timeString = this.languageSwitcher ? 
            this.languageSwitcher.formatTime(now) : 
            now.toLocaleString();
        
        this.addOutput(`🕒 ${timeString}`, 'system');
        this.addOutput(`⏰ Timestamp: ${now.getTime()}`, 'system');
    }
    
    showRandomJoke() {
        const joke = this.languageSwitcher ? 
            this.languageSwitcher.getRandomJoke() : 
            'Error loading joke 😅';
        this.addOutput(`😄 ${joke}`, 'success');
    }
    
    showRandomQuote() {
        const quote = this.languageSwitcher ? 
            this.languageSwitcher.getRandomQuote() : 
            'Error loading quote 💭';
        this.addOutput(`💭 ${quote}`, 'success');
    }
    
    showStats() {
        const stats = [
            this.t('stats-title'),
            "",
            this.t('stats-commands', { count: this.commandHistory.length }),
            this.t('stats-uptime', { uptime: this.getUptime() }),
            this.t('stats-memory', { memory: Math.floor(Math.random() * 50 + 30) }),
            this.t('stats-cpu', { cpu: Math.floor(Math.random() * 20 + 5) }),
            this.t('stats-connectivity'),
            this.t('stats-status'),
            "",
            this.t('stats-easter'),
            this.t('stats-fun')
        ];
        
        stats.forEach(stat => this.addOutput(stat, 'system'));
    }
    
    showEasterEggs() {
        this.addOutput("🥚 Easter Eggs disponibles:", 'hint');
        this.addOutput("", 'normal');
        this.addOutput("🎵 Hay comandos musicales ocultos...", 'hint');
        this.addOutput("🎮 Algunos están relacionados con juegos clásicos...", 'hint');
        this.addOutput("💊 Otros con películas icónicas...", 'hint');
        this.addOutput("🥋 Y algunos requieren secuencias especiales...", 'hint');
        this.addOutput("", 'normal');
        this.addOutput("💡 Pista: 'play' + algo podría funcionar... 😉", 'warning');
    }
    
    showWhoAmI() {
        this.addOutput("🤖 Eres un usuario de CodAlea RetroOS", 'system');
        this.addOutput("🌟 Privilegios: ADMIN", 'success');
        this.addOutput("🎯 Nivel: Hacker Retro", 'success');
        this.addOutput("💻 Terminal: CodAlea Console v2.0", 'system');
        this.addOutput("🔑 ID: " + Math.random().toString(36).substr(2, 9).toUpperCase(), 'system');
    }
    
    showPath() {
        this.addOutput("/home/codalea/retro-system/", 'system');
    }
    
    listFiles() {
        const files = [
            "📁 projects/",
            "📁 games/",
            "📁 music/",
            "📄 readme.txt",
            "📄 secrets.encrypted",
            "📄 easter-eggs.hidden",
            "🎮 thriller.game",
            "🎮 tron.game",
            "💾 codalea.core"
        ];
        
        files.forEach(file => this.addOutput(file, 'system'));
    }
    
    catFile(args) {
        if (!args.length) {
            this.addOutput("❌ Uso: cat <archivo>", 'error');
            return;
        }
        
        const file = args[0];
        switch (file) {
            case 'readme.txt':
                this.addOutput("Bienvenido a CodAlea RetroOS! 🚀", 'system');
                this.addOutput("Este sistema contiene easter eggs ocultos.", 'system');
                this.addOutput("¡Explora y diviértete!", 'system');
                break;
            case 'secrets.encrypted':
                this.addOutput("🔐 Archivo encriptado. Acceso denegado.", 'error');
                this.addOutput("💡 Pista: Prueba comandos musicales...", 'hint');
                break;
            default:
                this.addOutput(`❌ Archivo '${file}' no encontrado.`, 'error');
        }
    }
    
    echo(args) {
        if (!args.length) {
            this.addOutput("❌ Uso: echo <mensaje>", 'error');
            return;
        }
        
        const message = args.join(' ');
        this.addOutput(message, 'system');
    }
    
    cowsay(args) {
        const message = args.length ? args.join(' ') : 'CodAlea es genial!';
        const cow = [
            ` ${'_'.repeat(message.length + 2)}`,
            `< ${message} >`,
            ` ${'‾'.repeat(message.length + 2)}`,
            "        \\   ^__^",
            "         \\  (oo)\\_______",
            "            (__)\\       )\\/\\",
            "                ||----w |",
            "                ||     ||"
        ];
        
        cow.forEach(line => this.addOutput(line, 'system'));
    }
    
    getUptime() {
        const start = this.startTime || new Date();
        const now = new Date();
        const diff = now - start;
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    }
    
    // Sistema de Audio
    playAudio(audioFile, description) {
        // Detener audio actual si existe
        this.stopAudio();
        
        try {
            this.currentAudio = new Audio(`/mp3songs/${audioFile}`);
            this.currentAudio.volume = this.audioVolume;
            this.currentAudio.loop = true; // Reproducir en bucle
            
            // Reproducir el audio
            this.currentAudio.play().then(() => {
                this.addOutput(this.t('audio-playing', { description: description }), 'success');
                this.addOutput(this.t('audio-volume', { volume: Math.round(this.audioVolume * 100) }), 'system');
                this.addOutput(this.t('audio-loop'), 'system');
                this.addOutput(this.t('audio-tip'), 'hint');
            }).catch((error) => {
                this.addOutput(this.t('audio-error', { error: error.message }), 'error');
                this.addOutput(this.t('audio-file-error'), 'warning');
            });
            
        } catch (error) {
            this.addOutput(`❌ Error cargando audio: ${error.message}`, 'error');
        }
    }
    
    stopAudio() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
            this.addOutput(this.t('audio-stopped'), 'system');
        }
    }
    
    adjustVolume(newVolume) {
        newVolume = Math.max(0, Math.min(1, newVolume)); // Asegurar que esté entre 0 y 1
        this.audioVolume = newVolume;
        
        if (this.currentAudio) {
            this.currentAudio.volume = this.audioVolume;
        }
        
        this.addOutput(this.t('volume-adjusted', { volume: Math.round(this.audioVolume * 100) }), 'system');
    }
    
    volumeControl(args) {
        if (!args.length) {
            this.addOutput(this.t('volume-current', { volume: Math.round(this.audioVolume * 100) }), 'system');
            this.addOutput(this.t('volume-usage'), 'hint');
            return;
        }
        
        const volume = parseInt(args[0]);
        if (isNaN(volume) || volume < 0 || volume > 100) {
            this.addOutput(this.t('volume-invalid'), 'error');
            return;
        }
        
        this.adjustVolume(volume / 100);
    }
    
    // Juegos y easter eggs
    launchTronGame() {
        this.playAudio('Derezzed.mp3', 'Daft Punk - Derezzed (TRON: Legacy)');
        this.showGame('🎮 TRON: Legacy - Derezzed', 'derezzed-grid', this.createTronGame());
    }
    
    launchThrillerGame() {
        this.playAudio('Thriller.mp3', 'Michael Jackson - Thriller');
        this.showGame('🕺 Michael Jackson - Thriller Dance', 'thriller-dance', this.createThrillerGame());
    }
    
    showCodAleaInfo() {
        const messages = [
            "🚀 CodAlea System Information",
            "==========================",
            "",
            "💡 Innovación: ████████████ 100%",
            "⚡ Velocidad:   ████████████ 100%", 
            "🎨 Creatividad: ████████████ 100%",
            "☕ Café:        ████████████ 100%",
            "",
            "🌟 Estado: REVOLUCIONANDO EL CÓDIGO",
            "🔥 Misión: CREAR EL FUTURO",
            "✨ Próximo paso: CONQUISTAR LA GALAXIA"
        ];
        
        messages.forEach(msg => this.addOutput(msg, 'success'));
    }
    
    activateMatrixMode() {
        this.addOutput("💊 Eligiendo la píldora roja...", 'success');
        this.addOutput("🌐 Conectando a la Matrix...", 'system');
        
        setTimeout(() => {
            this.addOutput("👁️ Bienvenido a la Matrix, Neo.", 'hint');
            this.addOutput("🔓 Acceso total desbloqueado.", 'success');
            this.addOutput("🚪 Todas las puertas están abiertas.", 'success');
            
            // Activar modo matrix visual
            const console = document.getElementById('codalea-retro-console');
            console.style.background = 'linear-gradient(145deg, #001100, #003300)';
            console.style.borderColor = '#00ff00';
            
            setTimeout(() => {
                console.style.background = '';
                console.style.borderColor = '';
            }, 5000);
        }, 2000);
    }
    
    konamiCode() {
        this.addOutput("🎯 ¡CÓDIGO KONAMI ACTIVADO!", 'success');
        this.addOutput("🚀 Todos los poderes desbloqueados!", 'success');
        this.addOutput("🎮 Modo Dios activado por 30 segundos!", 'success');
        
        // Efectos visuales especiales
        const console = document.getElementById('codalea-retro-console');
        console.style.animation = 'glow 0.5s ease-in-out 6';
        
        setTimeout(() => {
            console.style.animation = '';
            this.addOutput("⏰ Modo Dios desactivado. ¡Fue divertido!", 'warning');
        }, 30000);
    }
    
    showGame(title, className, content) {
        const modal = document.getElementById('game-modal');
        const gameTitle = document.getElementById('game-title');
        const gameArea = document.getElementById('game-area');
        
        gameTitle.textContent = title;
        gameArea.className = `game-area ${className}`;
        gameArea.innerHTML = content;
        
        modal.classList.add('active');
    }
    
    createTronGame() {
        return `
            <div style="text-align: center; color: #00ffff;">
                <h2>🎮 CodAlea Presents: TRON Legacy Grid</h2>
                <div style="color: #666; font-size: 10px; margin-bottom: 15px;">
                    [ GAME IN DEVELOPMENT - Beta v0.2.2025 ]
                </div>
                
                <div style="border: 2px solid #00ffff; padding: 15px; margin: 10px; background: rgba(0, 255, 255, 0.1);">
                    <div style="font-size: 24px; margin: 10px 0;">
                        ◢█◣&nbsp;&nbsp;&nbsp;&nbsp;◢█◣<br>
                        ████&nbsp;&nbsp;&nbsp;&nbsp;████<br>
                        ◥█◤&nbsp;&nbsp;&nbsp;&nbsp;◥█◤<br>
                    </div>
                    <div style="color: #ffcc00; font-size: 14px; margin: 10px 0;">
                        💫 "I fight for the users..." 💫
                    </div>
                </div>

                <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #ffff00;">⚡ ENERGY</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 9999) + 1000}</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #ff00ff;">🏁 CIRCUIT</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 10) + 1}/15</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #00ff00;">�️ BIKES</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 8) + 2}</div>
                    </div>
                </div>

                <div style="border: 1px dashed #666; padding: 10px; margin: 15px 0; background: rgba(0,0,0,0.2);">
                    <div style="color: #888; font-size: 11px;">
                        🎮 GAMEPLAY PREVIEW:
                    </div>
                    <div style="color: #ccc; font-size: 12px; margin: 5px 0;">
                        • WASD to control your light cycle 🏍️💙<br>
                        • Create light walls to trap opponents ⚡<br>
                        • Survive in the digital arena! 🌐<br>
                        • Enter the Grid and fight for freedom 🔓
                    </div>
                </div>

                <div style="background: linear-gradient(90deg, #001a1a, #002d2d); padding: 10px; margin: 15px 0; border-left: 3px solid #00ffff;">
                    <div style="color: #00ffff; font-size: 11px; font-weight: bold;">🏗️ DESARROLLO EN PROGRESO</div>
                    <div style="color: #ccc; font-size: 10px;">
                        ⚡ CodAlea está creando la experiencia definitiva de TRON<br>
                        🎯 Próximas características: Arena 3D, Disc Combat, Identity Disc Battles<br>
                        💡 ¿Sugerencias? Contáctanos en info@codalea.com
                    </div>
                </div>

                <div style="margin-top: 20px;">
                    <p>🎵 Daft Punk - Derezzed sonando en bucle</p>
                </div>

                <div style="margin-top: 20px; font-size: 10px; color: #666;">
                    🎬 Este será un juego completo desarrollado por CodAlea<br>
                    💻 Tecnologías: ASP.NET Core, Three.js, WebGL 2.0<br>
                    � Estado: Beta | ETA: Q3 2025<br>
                    <br>
                    💡 Comandos disponibles: stop, volume, mute, unmute
                </div>
            </div>
        `;
    }
    
    createThrillerGame() {
        return `
            <div style="text-align: center; color: #ff6600;">
                <h2>🕺 CodAlea Presents: Thriller Dance Battle</h2>
                <div style="color: #666; font-size: 10px; margin-bottom: 15px;">
                    [ GAME IN DEVELOPMENT - Alpha v0.1.2025 ]
                </div>
                
                <div style="border: 2px solid #ff6600; padding: 15px; margin: 10px; background: rgba(255, 102, 0, 0.1);">
                    <div style="font-size: 20px; margin: 10px 0; animation: thriller 2s infinite;">
                        🧟‍♂️ 🕺 🧟‍♀️ 🕺 🧟‍♂️
                    </div>
                    <div style="color: #ffcc00; font-size: 14px; margin: 10px 0;">
                        🎵 "It's close to midnight..." 🎵
                    </div>
                </div>

                <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #ffff00;">� DANCE MOVES</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 100) + 50}</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #ff00ff;">⭐ SYNC LEVEL</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 5) + 1}/5</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
                        <div style="color: #00ff00;">🧟‍♂️ ZOMBIES</div>
                        <div style="color: #fff; font-size: 18px;">${Math.floor(Math.random() * 20) + 10}</div>
                    </div>
                </div>

                <div style="border: 1px dashed #666; padding: 10px; margin: 15px 0; background: rgba(0,0,0,0.2);">
                    <div style="color: #888; font-size: 11px;">
                        🎮 GAMEPLAY PREVIEW:
                    </div>
                    <div style="color: #ccc; font-size: 12px; margin: 5px 0;">
                        • Press SPACE to sync with the beat 🎵<br>
                        • Arrow keys to perform dance moves ⬅️➡️⬆️⬇️<br>
                        • Transform villagers into dancing zombies! 🧟‍♂️💃<br>
                        • Survive until dawn breaks 🌅
                    </div>
                </div>

                <div style="background: linear-gradient(90deg, #1a1a1a, #2d2d2d); padding: 10px; margin: 15px 0; border-left: 3px solid #ff6600;">
                    <div style="color: #ff6600; font-size: 11px; font-weight: bold;">🏗️ DESARROLLO EN PROGRESO</div>
                    <div style="color: #ccc; font-size: 10px;">
                        ⚡ CodAlea está creando la experiencia definitiva de Thriller<br>
                        🎯 Próximas características: Multijugador, Leaderboards, VR Support<br>
                        💡 ¿Ideas? Contáctanos en info@codalea.com
                    </div>
                </div>

                <div style="margin-top: 20px;">
                    <p>🎵 Michael Jackson - Thriller sonando en bucle</p>
                </div>

                <div style="margin-top: 20px; font-size: 10px; color: #666;">
                    🎬 Este será un juego completo desarrollado por CodAlea<br>
                    💻 Tecnologías: ASP.NET Core, JavaScript, WebGL<br>
                    � Estado: Pre-Alpha | ETA: Q4 2025<br>
                    <br>
                    💡 Comandos disponibles: stop, volume, mute, unmute
                </div>
            </div>
        `;
    }
    
    closeGame() {
        document.getElementById('game-modal').classList.remove('active');
        // Detener audio al cerrar el juego
        this.stopAudio();
    }
    
    // Controles de la consola
    toggle() {
        if (this.isActive) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.isActive = true;
        this.startTime = new Date();
        
        const container = document.getElementById('codalea-retro-console');
        const toggle = document.getElementById('console-toggle');
        
        container.classList.add('active');
        toggle.classList.add('active');
        
        // Cambiar el icono a X pero mantener la animación
        const consoleIcon = toggle.querySelector('.console-icon');
        if (consoleIcon) {
            consoleIcon.textContent = '×';
        }
        
        // Mostrar mensajes de boot
        setTimeout(() => {
            const bootMessages = this.getBootMessages();
            bootMessages.forEach((msg, index) => {
                setTimeout(() => {
                    this.addOutput(msg, index < 4 ? 'system' : 
                                     msg.includes(this.t('boot-hint').split(' ')[0]) || 
                                     msg.includes('pista') || msg.includes('Psst') ? 'hint' : 'system');
                }, index * 200);
            });
            
            // Focus en el input después del boot
            setTimeout(() => {
                document.getElementById('console-input').focus();
            }, bootMessages.length * 200 + 500);
        }, 500);
    }
    
    close() {
        this.isActive = false;
        
        // Detener audio al cerrar la consola
        this.stopAudio();
        
        const container = document.getElementById('codalea-retro-console');
        const toggle = document.getElementById('console-toggle');
        
        container.classList.remove('active');
        toggle.classList.remove('active');
        
        // Restaurar el icono original
        const consoleIcon = toggle.querySelector('.console-icon');
        if (consoleIcon) {
            consoleIcon.textContent = '💻';
        }
    }
    
    minimize() {
        const container = document.getElementById('codalea-retro-console');
        container.style.height = '50px';
        container.style.overflow = 'hidden';
        
        setTimeout(() => {
            container.style.height = '';
            container.style.overflow = '';
        }, 3000);
    }
    
    maximize() {
        const container = document.getElementById('codalea-retro-console');
        const isMaximized = container.style.width === '90vw';
        
        if (isMaximized) {
            container.style.width = '';
            container.style.height = '';
            container.style.right = '';
            container.style.bottom = '';
        } else {
            container.style.width = '90vw';
            container.style.height = '90vh';
            container.style.right = '5vw';
            container.style.bottom = '5vh';
        }
    }
}

// Inicializar consola cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todos los elementos estén cargados
    setTimeout(() => {
        window.codAleaConsole = new CodAleaRetroConsole();
    }, 1000);
});

// Exponer globalmente para debugging
window.CodAleaRetroConsole = CodAleaRetroConsole;
