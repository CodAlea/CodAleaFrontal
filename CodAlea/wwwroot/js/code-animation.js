// Animación de código .NET 8 constante con generación random
class CodeAnimation {
    constructor() {
        // Diferentes plantillas de código .NET 8 con referencias a CodAlea
        this.codeTemplates = {
            minimalApi: [
                { text: "// CodAlea - ASP.NET Core 8 Minimal API", type: "comment" },
                { text: "using Microsoft.AspNetCore.Mvc;", type: "using" },
                { text: "using CodAlea.Services;", type: "using" },
                { text: "", type: "blank" },
                { text: "var builder = WebApplication.CreateBuilder(args);", type: "code" },
                { text: "builder.Services.AddScoped<ICodAleaService>();", type: "code" },
                { text: "builder.Services.AddEndpointsApiExplorer();", type: "code" },
                { text: "builder.Services.AddSwaggerGen();", type: "code" },
                { text: "", type: "blank" },
                { text: "var app = builder.Build();", type: "code" },
                { text: "app.UseSwagger();", type: "code" },
                { text: "app.UseSwaggerUI();", type: "code" },
                { text: "", type: "blank" },
                { text: "app.MapGet(\"/api/codalea/status\", () => \"🚀 CodAlea is running!\");", type: "code" },
                { text: "app.Run();", type: "code" }
            ],
            controllerApi: [
                { text: "// CodAlea Web API Controller", type: "comment" },
                { text: "using Microsoft.AspNetCore.Mvc;", type: "using" },
                { text: "using CodAlea.Models;", type: "using" },
                { text: "", type: "blank" },
                { text: "[ApiController]", type: "attribute" },
                { text: "[Route(\"api/codalea/[controller]\")]", type: "attribute" },
                { text: "public class ProjectsController : ControllerBase", type: "code" },
                { text: "{", type: "code" },
                { text: "    private readonly ICodAleaRepository _repository;", type: "code" },
                { text: "", type: "blank" },
                { text: "    [HttpGet]", type: "attribute" },
                { text: "    public async Task<IActionResult> GetCodAleaProjectsAsync()", type: "code" },
                { text: "    {", type: "code" },
                { text: "        var projects = await _repository.GetAllAsync();", type: "code" },
                { text: "        return Ok(new { Success = true, Data = projects });", type: "code" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ],
            entityFramework: [
                { text: "// CodAlea - Entity Framework Core 8", type: "comment" },
                { text: "using Microsoft.EntityFrameworkCore;", type: "using" },
                { text: "using CodAlea.Entities;", type: "using" },
                { text: "", type: "blank" },
                { text: "public class CodAleaDbContext : DbContext", type: "code" },
                { text: "{", type: "code" },
                { text: "    public DbSet<CodAleaUser> Users { get; set; }", type: "code" },
                { text: "    public DbSet<CodAleaProject> Projects { get; set; }", type: "code" },
                { text: "    public DbSet<CodAleaFeature> Features { get; set; }", type: "code" },
                { text: "", type: "blank" },
                { text: "    protected override void OnModelCreating(ModelBuilder modelBuilder)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        modelBuilder.Entity<CodAleaUser>().HasKey(u => u.Id);", type: "code" },
                { text: "        modelBuilder.Entity<CodAleaProject>().Property(p => p.Name).IsRequired();", type: "code" },
                { text: "        // CodAlea: Configuración de relaciones", type: "comment" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ],
            blazorComponent: [
                { text: "// CodAlea Blazor Server Component", type: "comment" },
                { text: "@page \"/codalea/dashboard\"", type: "attribute" },
                { text: "@rendermode InteractiveServer", type: "attribute" },
                { text: "@inject ICodAleaService CodAleaService", type: "attribute" },
                { text: "", type: "blank" },
                { text: "<PageTitle>CodAlea Dashboard</PageTitle>", type: "code" },
                { text: "", type: "blank" },
                { text: "<h1>🚀 CodAlea Analytics</h1>", type: "code" },
                { text: "<p>Proyectos activos: @projectCount</p>", type: "code" },
                { text: "<p>Última actualización: @DateTime.Now.ToString(\"HH:mm:ss\")</p>", type: "code" },
                { text: "", type: "blank" },
                { text: "<button @onclick=\"RefreshData\">Actualizar</button>", type: "code" },
                { text: "", type: "blank" },
                { text: "@code {", type: "code" },
                { text: "    private int projectCount = 0;", type: "code" },
                { text: "    private async Task RefreshData() => projectCount++;", type: "code" },
                { text: "}", type: "code" }
            ],
            modernCsharp: [
                { text: "// CodAlea - Modern C# 12 Features", type: "comment" },
                { text: "using System.Text.Json;", type: "using" },
                { text: "using CodAlea.Core;", type: "using" },
                { text: "", type: "blank" },
                { text: "public record CodAleaUser(int Id, string Name, string Email);", type: "code" },
                { text: "", type: "blank" },
                { text: "public class CodAleaUserService", type: "code" },
                { text: "{", type: "code" },
                { text: "    public async Task<CodAleaUser?> GetUserAsync(int id)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        var user = await FetchCodAleaUserAsync(id);", type: "code" },
                { text: "        return user?.Id > 0 ? user : null;", type: "code" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ],
            aiIntegration: [
                { text: "// CodAlea AI Integration - GPT-4 powered", type: "comment" },
                { text: "using OpenAI;", type: "using" },
                { text: "using CodAlea.AI;", type: "using" },
                { text: "", type: "blank" },
                { text: "public class CodAleaAIService", type: "code" },
                { text: "{", type: "code" },
                { text: "    private readonly OpenAIClient _openAI;", type: "code" },
                { text: "    private readonly ICodAleaLogger _logger;", type: "code" },
                { text: "", type: "blank" },
                { text: "    public async Task<string> GenerateCodeAsync(string prompt)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        var response = await _openAI.GetChatCompletionsAsync(prompt);", type: "code" },
                { text: "        _logger.LogInfo($\"CodAlea AI generated {response.Length} chars\");", type: "code" },
                { text: "        return response;", type: "code" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ],
            microservices: [
                { text: "// CodAlea Microservices Architecture", type: "comment" },
                { text: "using Microsoft.Extensions.Hosting;", type: "using" },
                { text: "using CodAlea.MessageBus;", type: "using" },
                { text: "", type: "blank" },
                { text: "public class CodAleaOrderService : BackgroundService", type: "code" },
                { text: "{", type: "code" },
                { text: "    private readonly ICodAleaMessageBus _messageBus;", type: "code" },
                { text: "", type: "blank" },
                { text: "    protected override async Task ExecuteAsync(CancellationToken stoppingToken)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        await _messageBus.SubscribeAsync<CodAleaOrderCreated>(HandleOrderCreated);", type: "code" },
                { text: "    }", type: "code" },
                { text: "", type: "blank" },
                { text: "    private async Task HandleOrderCreated(CodAleaOrderCreated @event)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        Console.WriteLine($\"🎉 CodAlea Order {@event.Id} processed!\");", type: "code" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ],
            cloudNative: [
                { text: "// CodAlea Cloud Native with Kubernetes", type: "comment" },
                { text: "using Microsoft.Extensions.Diagnostics.HealthChecks;", type: "using" },
                { text: "using CodAlea.Observability;", type: "using" },
                { text: "", type: "blank" },
                { text: "public class CodAleaHealthCheck : IHealthCheck", type: "code" },
                { text: "{", type: "code" },
                { text: "    public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context)", type: "code" },
                { text: "    {", type: "code" },
                { text: "        var isHealthy = await CheckCodAleaServicesAsync();", type: "code" },
                { text: "        ", type: "blank" },
                { text: "        return isHealthy ? HealthCheckResult.Healthy(\"CodAlea services are running 🚀\")", type: "code" },
                { text: "                         : HealthCheckResult.Unhealthy(\"CodAlea services are down ❌\");", type: "code" },
                { text: "    }", type: "code" },
                { text: "}", type: "code" }
            ]
        };
        
        this.codeLines = [];
        this.currentLine = 0;
        this.currentChar = 0;
        this.isTyping = false;
        this.typingSpeed = 60;
        this.pauseDuration = 1200;
        this.lineDelay = 400;
        this.cycleDelay = 5000; // Tiempo antes de cambiar a un nuevo template
        this.svgContainer = null;
        this.animatedCodeGroup = null;
        this.isAnimationActive = false;
        this.currentTemplateIndex = 0;
        
        // Seleccionar un template random al iniciar
        this.selectRandomTemplate();
        this.init();
    }
    
    // Función para seleccionar un template aleatorio
    selectRandomTemplate() {
        const templateKeys = Object.keys(this.codeTemplates);
        const randomKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];
        this.codeLines = [...this.codeTemplates[randomKey]];
        
        // Añadir algunos elementos random adicionales
        this.addRandomElements();
        
        console.log(`CodAlea - Selected template: ${randomKey}`);
    }
    
    // Función para añadir elementos random al código
    addRandomElements() {
        const randomElements = [
            { text: "// Powered by CodAlea ⚡", type: "comment" },
            { text: "// CodAlea - Innovando el futuro del código", type: "comment" },
            { text: "// Generated with CodAlea Magic ✨", type: "comment" },
            { text: "// Performance optimized by CodAlea", type: "comment" },
            { text: "// CodAlea: Where code meets innovation", type: "comment" },
            { text: "// Built with 💙 by CodAlea Team", type: "comment" },
            { text: "// CodAlea.AI - Intelligent code generation", type: "comment" },
            { text: "// CodAlea.Studio - Professional development", type: "comment" },
            { text: "using CodAlea.Core;", type: "using" },
            { text: "using CodAlea.Extensions;", type: "using" },
            { text: "using CodAlea.Infrastructure;", type: "using" },
            { text: "using CodAlea.Services;", type: "using" },
            { text: "using CodAlea.AI;", type: "using" },
            { text: "using System.Threading.Tasks;", type: "using" },
            { text: "using Microsoft.Extensions.Logging;", type: "using" },
        ];
        
        // Añadir 1-3 elementos random
        const numberOfElements = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numberOfElements; i++) {
            const randomElement = randomElements[Math.floor(Math.random() * randomElements.length)];
            const randomPosition = Math.floor(Math.random() * this.codeLines.length);
            this.codeLines.splice(randomPosition, 0, randomElement);
        }
    }
    
    // Función para truncar texto largo y mantenerlo dentro del contenedor
    truncateTextIfNeeded(text, maxCharacters = 40) {
        // Método simple basado en caracteres (fallback)
        if (text.length > maxCharacters) {
            return text.substring(0, maxCharacters - 3) + "...";
        }
        return text;
    }
    
    // Función mejorada para truncar texto basado en ancho real del SVG
    truncateTextForSVG(text, maxPixelWidth = 210) {
        if (!this.svgContainer) return text;
        
        // Crear un elemento de texto temporal para medir
        const tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        tempText.setAttribute("font-family", "Consolas, 'Courier New', monospace");
        tempText.setAttribute("font-size", "9");
        tempText.setAttribute("opacity", "0");
        tempText.setAttribute("x", "255");
        tempText.setAttribute("y", "135");
        tempText.textContent = text;
        
        this.svgContainer.appendChild(tempText);
        
        try {
            const bbox = tempText.getBBox();
            
            // Si el texto cabe dentro del límite, devolverlo como está
            if (bbox.width <= maxPixelWidth) {
                this.svgContainer.removeChild(tempText);
                return text;
            }
            
            // Si es demasiado largo, truncar progresivamente
            let truncatedText = text;
            let attempts = 0;
            const maxAttempts = 20; // Evitar loops infinitos
            
            while (attempts < maxAttempts) {
                const targetLength = Math.floor(truncatedText.length * 0.9);
                if (targetLength <= 3) break;
                
                truncatedText = text.substring(0, targetLength - 3) + "...";
                tempText.textContent = truncatedText;
                
                const newBbox = tempText.getBBox();
                if (newBbox.width <= maxPixelWidth) {
                    break;
                }
                
                attempts++;
            }
            
            this.svgContainer.removeChild(tempText);
            return truncatedText;
            
        } catch (error) {
            // Fallback en caso de error
            console.warn('Error measuring text width, using character-based truncation:', error);
            this.svgContainer.removeChild(tempText);
            return this.truncateTextIfNeeded(text, 75);
        }
    }
    
    // Función para verificar y corregir desbordamiento dinámico
    checkAndFixOverflow(textElement, maxPixelWidth = 210) {
        if (!textElement) return;
        
        try {
            const bbox = textElement.getBBox();
            if (bbox.width > maxPixelWidth) {
                // El texto se desborda, truncarlo dinámicamente
                const currentText = textElement.textContent;
                const truncatedText = this.truncateTextForSVG(currentText, maxPixelWidth);
                textElement.textContent = truncatedText;
                
                console.log('CodAlea - Overflow detected and fixed:', currentText.length, '->', truncatedText.length);
            }
        } catch (error) {
            // En caso de error, usar truncado por caracteres
            const currentText = textElement.textContent;
            if (currentText.length > 75) {
                textElement.textContent = currentText.substring(0, 72) + "...";
            }
        }
    }
    
    // Función para revalidar y ajustar todo el código visible
    revalidateAllLines() {
        if (!this.isAnimationActive) return;
        
        this.codeLines.forEach((line, index) => {
            const textElement = document.getElementById(`code-line-${index}`);
            if (textElement && textElement.getAttribute('opacity') === '1') {
                this.checkAndFixOverflow(textElement, 210);
            }
        });
    }
    
    // Función para generar código dinámico
    generateDynamicCode() {
        const dynamicPatterns = [
            `var result = await service.ProcessAsync(${Math.floor(Math.random() * 100)});`,
            `public async Task<ActionResult<User>> GetUser(int id)`,
            `private readonly string _connectionString = "Server=db;Database=CodAlea${Math.floor(Math.random() * 10)}";`,
            `app.MapGet("/api/data/{id:int}", (int id) => Results.Ok($"Item {id}"));`,
            `builder.Services.AddDbContext<CodAleaDbContext>();`,
            `[HttpPost("create")]`,
            `[HttpPut("update/{id}")]`,
            `[HttpDelete("delete/{id}")]`,
            `public record CodAleaDto(int Id, string Name, DateTime CreatedAt);`,
            `await context.SaveChangesAsync();`,
            `return Results.Created($"/api/users/{user.Id}", user);`,
            `var users = await context.Users.ToListAsync();`,
            `if (model.IsValid) { /* Process Logic */ }`,
            `catch (Exception ex) { _logger.LogError(ex, "Error occurred"); }`,
            `return Ok(new { Status = "Success", Data = result });`,
            `_logger.LogInformation("🚀 Operation completed successfully");`,
            `public class CodAleaService : IService`,
            `private readonly IRepository _repo;`,
            `await _eventBus.PublishAsync(new Event());`,
            `return new Response { Success = true, Message = "Done!" };`,
            `var config = _configuration.GetSection("CodAlea");`,
            `services.AddCodAleaServices(configuration);`,
            `await _cache.SetAsync("user-" + id, user);`,
            `var telemetry = new Telemetry { Operation = "ProcessData" };`
        ];
        
        // Reemplazar algunas líneas con código dinámico (truncado si es necesario)
        for (let i = 0; i < this.codeLines.length; i++) {
            if (this.codeLines[i].type === "code" && Math.random() < 0.3) {
                const originalText = dynamicPatterns[Math.floor(Math.random() * dynamicPatterns.length)];
                this.codeLines[i].text = this.truncateTextForSVG(originalText, 210);
            }
        }
    }
    
    init() {
        this.svgContainer = document.querySelector('.code-editor-container svg');
        if (!this.svgContainer) {
            console.warn('CodAlea - SVG container not found, retrying...');
            setTimeout(() => this.init(), 500);
            return;
        }
        
        this.createAnimatedCodeStructure();
        this.startAnimation();
        this.createCodeParticles();
        this.createCodeHighlights();
    }
    
    createAnimatedCodeStructure() {
        if (!this.svgContainer) return;
        
        // Crear el contenedor del código animado
        this.animatedCodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.animatedCodeGroup.setAttribute("id", "animated-code-content");
        
        // Añadir el contenedor al SVG
        this.svgContainer.appendChild(this.animatedCodeGroup);
        
        // Crear las líneas de código con límite de ancho
        this.codeLines.forEach((line, index) => {
            const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textElement.setAttribute("x", "255");
            textElement.setAttribute("y", 135 + (index * 15));
            textElement.setAttribute("font-family", "Consolas, 'Courier New', monospace");
            textElement.setAttribute("font-size", "9");
            textElement.setAttribute("id", `code-line-${index}`);
            textElement.setAttribute("opacity", "0");
            
            // Aplicar colores según el tipo
            switch (line.type) {
                case "comment":
                    textElement.setAttribute("fill", "#6a9955");
                    break;
                case "attribute":
                    textElement.setAttribute("fill", "#9cdcfe");
                    break;
                case "using":
                    textElement.setAttribute("fill", "#c586c0");
                    break;
                case "blank":
                    textElement.setAttribute("fill", "transparent");
                    break;
                default:
                    textElement.setAttribute("fill", "#d4d4d4");
            }
            
            this.animatedCodeGroup.appendChild(textElement);
        });
        
        // Crear cursor
        const cursor = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        cursor.setAttribute("id", "typing-cursor");
        cursor.setAttribute("x", "255");
        cursor.setAttribute("y", "127");
        cursor.setAttribute("width", "1");
        cursor.setAttribute("height", "12");
        cursor.setAttribute("fill", "#ffffff");
        cursor.setAttribute("opacity", "0");
        cursor.setAttribute("class", "neon-cursor");
        
        // Añadir animación de parpadeo al cursor
        const blinkAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        blinkAnimation.setAttribute("attributeName", "opacity");
        blinkAnimation.setAttribute("values", "0;1;0");
        blinkAnimation.setAttribute("dur", "1s");
        blinkAnimation.setAttribute("repeatCount", "indefinite");
        cursor.appendChild(blinkAnimation);
        
        this.animatedCodeGroup.appendChild(cursor);
    }
    
    startAnimation() {
        this.isAnimationActive = true;
        this.activateVisualEffects();
        
        setTimeout(() => {
            this.typeCurrentLine();
        }, 1000);
    }
    
    typeCurrentLine() {
        if (!this.isAnimationActive) return;
        
        if (this.currentLine >= this.codeLines.length) {
            // Reiniciar animación con nuevo template
            setTimeout(() => {
                this.resetAnimation();
            }, this.cycleDelay);
            return;
        }
        
        // Aplicar efectos de escritura random
        this.addRandomTypingEffects();
        
        const line = this.codeLines[this.currentLine];
        const textElement = document.getElementById(`code-line-${this.currentLine}`);
        const cursor = document.getElementById("typing-cursor");
        
        if (!textElement || !cursor) return;
        
        // Mostrar la línea con animación
        textElement.setAttribute("opacity", "1");
        
        // Posicionar cursor
        cursor.setAttribute("y", 127 + (this.currentLine * 15));
        cursor.setAttribute("opacity", "1");
        
        if (line.type === "blank") {
            // Línea en blanco, pasar a la siguiente inmediatamente
            this.currentLine++;
            setTimeout(() => {
                this.typeCurrentLine();
            }, this.lineDelay);
            return;
        }
        
        // Truncar el texto usando medición SVG precisa antes de escribirlo
        const truncatedText = this.truncateTextForSVG(line.text, 210);
        
        this.isTyping = true;
        this.currentChar = 0;
        
        const typeInterval = setInterval(() => {
            if (!this.isAnimationActive) {
                clearInterval(typeInterval);
                return;
            }
            
            if (this.currentChar < truncatedText.length) {
                const currentText = truncatedText.substring(0, this.currentChar + 1);
                textElement.textContent = currentText;
                
                // Verificar desbordamiento en tiempo real
                this.checkAndFixOverflow(textElement, 210);
                
                // Actualizar posición del cursor con límite máximo y medición precisa
                try {
                    const bbox = textElement.getBBox();
                    const maxX = 465; // Límite máximo del contenedor (antes del minimap)
                    const textStartX = 255; // Posición inicial del texto
                    const newX = Math.min(textStartX + bbox.width, maxX);
                    cursor.setAttribute("x", newX);
                } catch (e) {
                    // Fallback mejorado si getBBox falla
                    const avgCharWidth = 5.4; // Ancho promedio de carácter en Consolas 9px
                    const estimatedWidth = this.currentChar * avgCharWidth;
                    const maxX = 465;
                    const textStartX = 255;
                    const newX = Math.min(textStartX + estimatedWidth, maxX);
                    cursor.setAttribute("x", newX);
                }
                
                this.currentChar++;
                
                // Efecto de brillo ocasional mientras se escribe
                if (Math.random() < 0.15) {
                    const randomColors = [
                        'rgba(6, 182, 212, 0.4)',
                        'rgba(37, 99, 235, 0.4)',
                        'rgba(16, 185, 129, 0.4)',
                        'rgba(245, 158, 11, 0.4)'
                    ];
                    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
                    textElement.style.filter = `drop-shadow(0 0 3px ${randomColor})`;
                    
                    setTimeout(() => {
                        textElement.style.filter = 'none';
                    }, 200);
                }
            } else {
                clearInterval(typeInterval);
                this.isTyping = false;
                
                // Mover cursor al final de la línea con medición precisa
                try {
                    const bbox = textElement.getBBox();
                    const maxX = 465;
                    const textStartX = 255;
                    const finalX = Math.min(textStartX + bbox.width, maxX);
                    cursor.setAttribute("x", finalX);
                } catch (e) {
                    // Fallback mejorado
                    const avgCharWidth = 5.4;
                    const estimatedWidth = truncatedText.length * avgCharWidth;
                    const maxX = 465;
                    const textStartX = 255;
                    const finalX = Math.min(textStartX + estimatedWidth, maxX);
                    cursor.setAttribute("x", finalX);
                }
                
                // Pasar a la siguiente línea
                this.currentLine++;
                setTimeout(() => {
                    this.typeCurrentLine();
                }, this.lineDelay);
            }
        }, this.typingSpeed);
    }
    
    resetAnimation() {
        if (!this.isAnimationActive) return;
        
        // Limpiar todas las líneas
        this.codeLines.forEach((_, index) => {
            const textElement = document.getElementById(`code-line-${index}`);
            if (textElement) {
                textElement.textContent = "";
                textElement.setAttribute("opacity", "0");
                textElement.classList.remove('code-glow');
            }
        });
        
        // Ocultar cursor
        const cursor = document.getElementById("typing-cursor");
        if (cursor) {
            cursor.setAttribute("opacity", "0");
        }
        
        // Seleccionar nuevo template random
        this.selectRandomTemplate();
        this.generateDynamicCode();
        
        // Recrear la estructura con el nuevo código
        this.recreateCodeStructure();
        
        // Reiniciar variables
        this.currentLine = 0;
        this.currentChar = 0;
        this.isTyping = false;
        
        // Reiniciar animación
        setTimeout(() => {
            this.typeCurrentLine();
        }, 1000);
    }
    
    // Función para recrear la estructura del código con nuevas líneas
    recreateCodeStructure() {
        // Remover el grupo actual
        const currentGroup = document.getElementById("animated-code-content");
        if (currentGroup) {
            currentGroup.remove();
        }
        
        // Crear nuevo grupo
        this.createAnimatedCodeStructure();
    }
    
    // Función para crear partículas de código flotantes mejoradas
    createCodeParticles() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const particleGroups = {
            codalea: ['CodAlea', '⚡', '🚀', '💙', '✨', 'Innovation', 'Future', 'Code', 'CodAlea.AI', 'CodAlea.Dev', 'CodAlea.Pro', 'CodAlea.Studio'],
            dotnet: ['.NET 8', 'C#', 'ASP.NET', 'Blazor', 'MAUI', 'Core', 'EF', 'SignalR', 'Minimal APIs', 'gRPC', 'WebAPI'],
            symbols: ['<>', '{}', '[]', '()', ';', '=', '+', '-', '*', '/', '!', '?', ':', '&&', '||', '=>', '??', '|>', '<|', '??=', '||='],
            keywords: ['var', 'new', 'async', 'await', 'public', 'class', 'void', 'string', 'int', 'bool', 'if', 'else', 'return', 'using', 'record', 'with', 'init', 'required'],
            methods: ['GetAsync()', 'PostAsync()', 'SaveAsync()', 'DeleteAsync()', 'UpdateAsync()', 'ProcessAsync()', 'ValidateAsync()', 'CreateAsync()', 'CodAleaService.Run()'],
            patterns: ['API', 'REST', 'HTTP', 'JSON', 'XML', 'SQL', 'NoSQL', 'gRPC', 'GraphQL', 'MVC', 'MVVM', 'DI', 'IoC', 'CQRS', 'Event Sourcing'],
            frameworks: ['Entity Framework', 'Dapper', 'AutoMapper', 'FluentValidation', 'MediatR', 'Serilog', 'Polly', 'CodAlea.Core', 'CodAlea.Extensions'],
            tech: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'Redis', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Kafka', 'nginx', 'CI/CD']
        };
        
        // Crear múltiples intervalos para diferentes tipos de partículas (más frecuentes)
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'codalea');
        }, 500); // Partículas de CodAlea más frecuentes
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'dotnet');
        }, 700);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'symbols');
        }, 600);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'keywords');
        }, 900);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'methods');
        }, 1100);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'patterns');
        }, 1300);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'frameworks');
        }, 1500);
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            this.createSingleParticle(heroSection, particleGroups, 'tech');
        }, 1700);
    }
    
    // Función auxiliar para crear una sola partícula
    createSingleParticle(heroSection, particleGroups, groupKey) {
        const selectedGroup = particleGroups[groupKey];
        const particle = document.createElement('div');
        particle.className = `code-particle ${groupKey}`;
        particle.textContent = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's'; // Duración más corta para más fluidez
        
        // Tamaño aleatorio para variedad (más pequeño y sutil)
        const fontSize = Math.random() * 4 + 10; // Entre 10px y 14px
        particle.style.fontSize = fontSize + 'px';
        
        // Añadir colores y efectos específicos por grupo (más sutiles)
        switch(groupKey) {
            case 'codalea':
                particle.style.color = 'rgba(37, 99, 235, 0.7)'; // Azul CodAlea más visible
                particle.style.fontWeight = 'bold';
                particle.style.textShadow = '0 0 20px rgba(37, 99, 235, 0.6)';
                break;
            case 'dotnet':
                particle.style.color = 'rgba(147, 51, 234, 0.6)'; // Purple
                particle.style.textShadow = '0 0 15px rgba(147, 51, 234, 0.5)';
                break;
            case 'symbols':
                particle.style.color = 'rgba(6, 182, 212, 0.6)'; // Cyan
                particle.style.textShadow = '0 0 12px rgba(6, 182, 212, 0.5)';
                break;
            case 'keywords':
                particle.style.color = 'rgba(245, 158, 11, 0.6)'; // Amber
                particle.style.textShadow = '0 0 12px rgba(245, 158, 11, 0.5)';
                break;
            case 'methods':
                particle.style.color = 'rgba(16, 185, 129, 0.6)'; // Green
                particle.style.textShadow = '0 0 12px rgba(16, 185, 129, 0.5)';
                break;
            case 'patterns':
                particle.style.color = 'rgba(239, 68, 68, 0.6)'; // Red
                particle.style.textShadow = '0 0 12px rgba(239, 68, 68, 0.5)';
                break;
            case 'frameworks':
                particle.style.color = 'rgba(99, 102, 241, 0.6)'; // Indigo
                particle.style.textShadow = '0 0 12px rgba(99, 102, 241, 0.5)';
                break;
            case 'tech':
                particle.style.color = 'rgba(168, 85, 247, 0.6)'; // Violet
                particle.style.textShadow = '0 0 12px rgba(168, 85, 247, 0.5)';
                break;
        }
        
        // Añadir efecto de suavizado para mejor legibilidad
        particle.style.filter = 'blur(0.5px)';
        particle.style.transition = 'all 0.3s ease';
        
        // Efecto hover para mayor interactividad
        particle.addEventListener('mouseenter', () => {
            particle.style.filter = 'blur(0px)';
            particle.style.transform = 'scale(1.2)';
        });
        
        particle.addEventListener('mouseleave', () => {
            particle.style.filter = 'blur(0.5px)';
            particle.style.transform = 'scale(1)';
        });
        
        heroSection.appendChild(particle);
        
        // Remover partícula después de la animación
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000); // Tiempo optimizado para evitar acumulación
    }
    
    // Función para crear efecto de brillo ocasional con colores random
    createCodeHighlights() {
        const highlightColors = [
            'rgba(6, 182, 212, 0.8)',     // Cyan
            'rgba(37, 99, 235, 0.8)',     // Blue
            'rgba(16, 185, 129, 0.8)',    // Green
            'rgba(245, 158, 11, 0.8)',    // Amber
            'rgba(239, 68, 68, 0.8)',     // Red
            'rgba(147, 51, 234, 0.8)'     // Purple
        ];
        
        setInterval(() => {
            if (!this.isAnimationActive) return;
            
            const randomLine = Math.floor(Math.random() * this.codeLines.length);
            const textElement = document.getElementById(`code-line-${randomLine}`);
            
            if (textElement && textElement.getAttribute('opacity') === '1') {
                const randomColor = highlightColors[Math.floor(Math.random() * highlightColors.length)];
                textElement.style.filter = `drop-shadow(0 0 5px ${randomColor})`;
                
                // Efecto de pulso adicional
                textElement.style.transform = 'scale(1.05)';
                textElement.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    textElement.style.filter = 'none';
                    textElement.style.transform = 'scale(1)';
                }, 1500);
            }
        }, 6000);
    }
    
    // Función para añadir efectos de escritura random
    addRandomTypingEffects() {
        const effects = [
            () => {
                // Efecto de "typing burst" - escribir varias líneas rápido
                this.typingSpeed = Math.floor(Math.random() * 30) + 20;
            },
            () => {
                // Efecto de "slow typing" - escribir más lento
                this.typingSpeed = Math.floor(Math.random() * 50) + 80;
            },
            () => {
                // Efecto de "pause" - pausa más larga entre líneas
                this.lineDelay = Math.floor(Math.random() * 500) + 600;
            },
            () => {
                // Efecto normal
                this.typingSpeed = 60;
                this.lineDelay = 400;
            }
        ];
        
        // Aplicar efecto random cada pocas líneas
        if (Math.random() < 0.3) {
            const randomEffect = effects[Math.floor(Math.random() * effects.length)];
            randomEffect();
        }
    }
    
    // Función para activar efectos visuales durante la escritura
    activateVisualEffects() {
        const heroSection = document.querySelector('.hero-section');
        const codeContainer = document.querySelector('.code-editor-container');
        
        if (heroSection) {
            heroSection.classList.add('typing-active');
        }
        
        if (codeContainer) {
            codeContainer.classList.add('active');
        }
    }
    
    // Función para desactivar efectos visuales
    deactivateVisualEffects() {
        const heroSection = document.querySelector('.hero-section');
        const codeContainer = document.querySelector('.code-editor-container');
        
        if (heroSection) {
            heroSection.classList.remove('typing-active');
        }
        
        if (codeContainer) {
            codeContainer.classList.remove('active');
        }
    }
    
    // Función mejorada para manejar la pausa y reanudación
    pause() {
        this.isAnimationActive = false;
        this.deactivateVisualEffects();
        console.log('CodAlea Animation paused');
    }
    
    // Función mejorada para reanudar la animación
    resume() {
        this.isAnimationActive = true;
        this.activateVisualEffects();
        this.typeCurrentLine();
        console.log('CodAlea Animation resumed');
    }
    
    // Función para obtener estadísticas de la animación
    getStats() {
        return {
            currentTemplate: this.getCurrentTemplateName(),
            totalLines: this.codeLines.length,
            currentLine: this.currentLine,
            isTyping: this.isTyping,
            isActive: this.isAnimationActive,
            poweredBy: 'CodAlea'
        };
    }
    
    // Función para obtener el nombre del template actual
    getCurrentTemplateName() {
        // Identificar el template basado en el primer comentario
        const firstLine = this.codeLines[0];
        if (firstLine && firstLine.type === 'comment') {
            if (firstLine.text.includes('Minimal API')) return 'Minimal API';
            if (firstLine.text.includes('Controller')) return 'Web API Controller';
            if (firstLine.text.includes('Entity Framework')) return 'Entity Framework';
            if (firstLine.text.includes('Blazor')) return 'Blazor Component';
            if (firstLine.text.includes('Modern C#')) return 'Modern C# Features';
            if (firstLine.text.includes('AI Integration')) return 'AI Integration';
            if (firstLine.text.includes('Microservices')) return 'Microservices';
            if (firstLine.text.includes('Cloud Native')) return 'Cloud Native';
        }
        return 'CodAlea Template';
    }
}

// Inicializar animación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    let codeAnimation = null;
    
    // Función para inicializar la animación
    function initCodeAnimation() {
        const codeContainer = document.querySelector('.code-editor-container svg');
        if (codeContainer) {
            codeAnimation = new CodeAnimation();
            console.log('🚀 CodAlea Animation initialized successfully!');
        } else {
            // Reintentar después de un tiempo si el SVG no está listo
            setTimeout(initCodeAnimation, 500);
        }
    }
    
    // Inicializar después de un pequeño retraso
    setTimeout(initCodeAnimation, 1000);
    
    // Pausar animación cuando la página no esté visible
    document.addEventListener('visibilitychange', function() {
        if (codeAnimation) {
            if (document.hidden) {
                codeAnimation.pause();
            } else {
                codeAnimation.resume();
            }
        }
    });
    
    // Optimización: pausar partículas cuando el usuario hace scroll hacia abajo
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        if (codeAnimation && Math.abs(window.scrollY - lastScrollY) > 100) {
            // El usuario está haciendo scroll activo
            lastScrollY = window.scrollY;
        }
    });
    
    // Revalidar líneas cuando cambie el tamaño de ventana
    window.addEventListener('resize', function() {
        if (codeAnimation) {
            setTimeout(() => {
                codeAnimation.revalidateAllLines();
            }, 100);
        }
    });
    
    // Exponer la instancia globalmente para debugging
    window.CodAleaAnimation = codeAnimation;
});
