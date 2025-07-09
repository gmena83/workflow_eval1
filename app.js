// Application data from JSON
const appData = {
  "evaluation_data": {
    "global_score": 78.6,
    "cost_per_cycle": 1.10,
    "time_per_cycle": 75,
    "tokens_per_cycle": 2200,
    "projected_savings": {
      "cost_reduction": 38.2,
      "time_reduction": 42.7,
      "annual_savings": 5040
    }
  },
  "phases": [
    {
      "id": 1,
      "name": "Entrada de Datos",
      "score": 75,
      "cost": 0.05,
      "time": 2,
      "tokens": 100,
      "status": "needs_improvement",
      "problems": ["Falta de sanitización de inputs", "Validación inconsistente"],
      "checklist": [
        "Implementar validación JSON Schema",
        "Agregar sanitización robusta de inputs",
        "Definir tipos de datos estrictos",
        "Configurar manejo de errores"
      ],
      "optimized_prompt": {
        "model": "gpt-3.5-turbo",
        "temperature": 0.1,
        "max_tokens": 150,
        "system_prompt": "Eres un validador de datos especializado en workflows de contenido. Valida y sanitiza los datos de entrada siguiendo esquemas JSON estrictos.",
        "user_prompt": "Valida estos datos de entrada para el workflow de contenido: {user_input}. Retorna datos estructurados y sanitizados o errores específicos."
      }
    },
    {
      "id": 2,
      "name": "Generación de Ideas",
      "score": 85,
      "cost": 0.15,
      "time": 8,
      "tokens": 300,
      "status": "good",
      "problems": ["Dependencia excesiva de templates estáticos", "Falta diversidad en prompts"],
      "checklist": [
        "Implementar rotación de templates",
        "Agregar contexto dinámico por audiencia",
        "Configurar A/B testing automático",
        "Optimizar para gpt-4o-mini"
      ],
      "optimized_prompt": {
        "model": "gpt-4o-mini",
        "temperature": 0.7,
        "max_tokens": 300,
        "system_prompt": "Genera ideas creativas para contenido considerando audiencia, plataforma y objetivos específicos. Varía el enfoque según el contexto.",
        "user_prompt": "Para {tipo_contenido} dirigido a {audiencia} en {plataforma}, genera 3 ideas únicas que maximicen engagement. Contexto adicional: {contexto}"
      }
    },
    {
      "id": 3,
      "name": "Creación de Contenido",
      "score": 90,
      "cost": 0.45,
      "time": 15,
      "tokens": 900,
      "status": "excellent",
      "problems": ["Exceso de tokens por request", "Costo alto (40.9% del total)"],
      "checklist": [
        "Mantener calidad narrativa alta",
        "Optimizar longitud de prompts",
        "Implementar compresión semántica",
        "Validar coherencia estructural"
      ],
      "optimized_prompt": {
        "model": "gpt-4o",
        "temperature": 0.6,
        "max_tokens": 800,
        "system_prompt": "Crea contenido de alta calidad manteniendo coherencia narrativa y estructura clara. Adapta el tono a la audiencia objetivo.",
        "user_prompt": "Crea {tipo_contenido} basado en: {idea_seleccionada}. Audiencia: {audiencia}. Tono: {tono}. Longitud: {longitud_objetivo}."
      }
    },
    {
      "id": 4,
      "name": "Validación de Contenido",
      "score": 70,
      "cost": 0.25,
      "time": 12,
      "tokens": 500,
      "status": "critical",
      "problems": ["Criterios básicos de validación", "20% contenido subóptimo pasa"],
      "checklist": [
        "Implementar LLM-as-a-Judge avanzado",
        "Definir criterios multi-dimensionales",
        "Migrar a gpt-4o-mini",
        "Configurar scoring automático"
      ],
      "optimized_prompt": {
        "model": "gpt-4o-mini",
        "temperature": 0.2,
        "max_tokens": 500,
        "system_prompt": "Evalúa contenido según criterios: calidad, relevancia, tono, estructura, engagement potencial. Puntúa 1-10 cada criterio.",
        "user_prompt": "Evalúa este contenido: {contenido}. Criterios: calidad narrativa, alineación con audiencia {audiencia}, potencial viral, estructura. Retorna puntuación detallada."
      }
    },
    {
      "id": 5,
      "name": "Formateo para Plataformas",
      "score": 85,
      "cost": 0.10,
      "time": 5,
      "tokens": 200,
      "status": "good",
      "problems": ["Adaptación limitada por plataforma", "Formato rígido"],
      "checklist": [
        "Personalizar por algoritmos de plataforma",
        "Optimizar hashtags y metadatos",
        "Adaptar longitud según plataforma",
        "Incluir elementos visuales sugeridos"
      ],
      "optimized_prompt": {
        "model": "gpt-3.5-turbo-16k",
        "temperature": 0.3,
        "max_tokens": 400,
        "system_prompt": "Adapta contenido a especificaciones técnicas y mejores prácticas de cada plataforma social.",
        "user_prompt": "Formatea para {plataforma}: {contenido}. Incluye hashtags óptimos, longitud correcta, llamadas a acción efectivas."
      }
    },
    {
      "id": 6,
      "name": "Revisión Final",
      "score": 65,
      "cost": 0.08,
      "time": 30,
      "tokens": 150,
      "status": "critical",
      "problems": ["Proceso mayormente manual", "Cuello de botella de 30 segundos"],
      "checklist": [
        "Automatizar checklist de revisión",
        "Implementar validación automática",
        "Reducir intervención manual",
        "Configurar fallbacks automáticos"
      ],
      "optimized_prompt": {
        "model": "gpt-4o-mini",
        "temperature": 0.2,
        "max_tokens": 300,
        "system_prompt": "Realiza revisión final automatizada verificando coherencia, errores gramaticales, alineación con objetivos.",
        "user_prompt": "Revisión final de: {contenido_formateado}. Verifica: gramática, coherencia, alineación con {objetivos}, optimización para {plataforma}."
      }
    },
    {
      "id": 7,
      "name": "Salida/Publicación",
      "score": 80,
      "cost": 0.02,
      "time": 3,
      "tokens": 50,
      "status": "good",
      "problems": ["Falta métricas de rendimiento", "Sin tracking post-publicación"],
      "checklist": [
        "Implementar métricas de performance",
        "Agregar tracking de costos",
        "Configurar analytics post-publicación",
        "Establecer loops de feedback"
      ],
      "optimized_prompt": {
        "model": "gpt-3.5-turbo",
        "temperature": 0.1,
        "max_tokens": 200,
        "system_prompt": "Gestiona publicación y tracking de métricas. Genera reportes de rendimiento.",
        "user_prompt": "Procesa publicación para {plataforma}. Configura tracking de: engagement, alcance, conversiones. Genera reporte inicial."
      }
    }
  ],
  "critical_errors": [
    {
      "id": 1,
      "title": "Prompts Excesivamente Largos",
      "impact": "Aumento del 30% en costos",
      "affected_nodes": ["Creación de Contenido", "Validación"],
      "solution": "Implementar compresión de prompts con máximo 200 tokens",
      "priority": "Alta"
    },
    {
      "id": 2,
      "title": "Falta de Contexto Específico",
      "impact": "Reducción del 15% en calidad",
      "affected_nodes": ["Generación de Ideas", "Creación de Contenido"],
      "solution": "Agregar contexto dinámico por audiencia y plataforma",
      "priority": "Alta"
    },
    {
      "id": 3,
      "title": "Entrada de Datos No Validada",
      "impact": "Errores en cascada",
      "affected_nodes": ["Entrada de Datos"],
      "solution": "Implementar validación JSON Schema robusta",
      "priority": "Alta"
    },
    {
      "id": 4,
      "title": "Criterios de Validación Básicos",
      "impact": "20% contenido subóptimo pasa",
      "affected_nodes": ["Validación de Contenido"],
      "solution": "Implementar LLM-as-a-Judge avanzado",
      "priority": "Crítica"
    },
    {
      "id": 5,
      "title": "Exceso de Tokens por Request",
      "impact": "40% sobrecosto innecesario",
      "affected_nodes": ["Múltiples nodos"],
      "solution": "Model routing inteligente y optimización",
      "priority": "Alta"
    },
    {
      "id": 6,
      "title": "Conexiones Mal Definidas",
      "impact": "Fallos en cadena",
      "affected_nodes": ["Sistema completo"],
      "solution": "Redefinir schema de datos con validación",
      "priority": "Media"
    },
    {
      "id": 7,
      "title": "Falta de Manejo de Errores",
      "impact": "Sistema frágil",
      "affected_nodes": ["Sistema completo"],
      "solution": "Try-catch robusto con fallbacks",
      "priority": "Media"
    }
  ],
  "optimizations": [
    {
      "priority": 1,
      "name": "Validación de Contenido",
      "roi": 52,
      "savings_per_cycle": 0.13,
      "description": "LLM-as-a-Judge avanzado + migración a gpt-4o-mini"
    },
    {
      "priority": 2,
      "name": "Revisión Final",
      "roi": 50,
      "savings_per_cycle": 0.04,
      "time_saved": 22,
      "description": "Automatización completa del proceso manual"
    },
    {
      "priority": 3,
      "name": "Generación de Ideas",
      "roi": 47,
      "savings_per_cycle": 0.07,
      "description": "Optimización para gpt-4o-mini + A/B testing"
    }
  ],
  "roadmap": {
    "phase_1": {
      "name": "Optimizaciones Rápidas",
      "weeks": "1-2",
      "impact": "25% reducción de costos",
      "tasks": [
        "Optimizar prompts existentes",
        "Implementar model routing básico",
        "Agregar validación JSON Schema",
        "Setup monitoring básico"
      ]
    },
    "phase_2": {
      "name": "Automatización y Cache",
      "weeks": "3-4", 
      "impact": "15% reducción adicional",
      "tasks": [
        "Implementar Redis Cache",
        "Automatizar revisión final",
        "Agregar fallback mechanisms",
        "Implementar batch processing"
      ]
    },
    "phase_3": {
      "name": "IA Avanzada",
      "weeks": "5-6",
      "impact": "10% mejora de calidad",
      "tasks": [
        "LLM-as-a-Judge para validación",
        "A/B testing automatizado",
        "Análisis semántico avanzado"
      ]
    },
    "phase_4": {
      "name": "Escalabilidad",
      "weeks": "7-8",
      "impact": "Preparación escala 10x",
      "tasks": [
        "Load balancing",
        "Optimizaciones BD",
        "Cache strategies avanzadas"
      ]
    }
  }
};

// State management
let checklistState = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadPhasesData();
    loadErrorsData();
    loadOptimizationsData();
    loadPromptsData();
    loadRoadmapData();
    initializeChecklistState();
});

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
}

// Load phases data
function loadPhasesData() {
    const container = document.getElementById('phases-container');
    if (!container) return;
    
    appData.phases.forEach(phase => {
        const phaseCard = createPhaseCard(phase);
        container.appendChild(phaseCard);
    });
}

// Create phase card
function createPhaseCard(phase) {
    const card = document.createElement('div');
    card.className = 'phase-card';
    
    card.innerHTML = `
        <div class="phase-header" onclick="togglePhaseContent(${phase.id})">
            <div class="phase-title">
                <h3>${phase.name}</h3>
                <span class="phase-score ${phase.status}">${phase.score}/100</span>
            </div>
            <span class="expand-icon">▼</span>
        </div>
        <div class="phase-content" id="phase-content-${phase.id}">
            <div class="phase-metrics">
                <div class="phase-metric">
                    <div class="phase-metric-value">$${phase.cost.toFixed(2)}</div>
                    <div class="phase-metric-label">Costo</div>
                </div>
                <div class="phase-metric">
                    <div class="phase-metric-value">${phase.time}s</div>
                    <div class="phase-metric-label">Tiempo</div>
                </div>
                <div class="phase-metric">
                    <div class="phase-metric-value">${phase.tokens}</div>
                    <div class="phase-metric-label">Tokens</div>
                </div>
            </div>
            
            <h4>Problemas Identificados</h4>
            <ul class="problems-list">
                ${phase.problems.map(problem => `<li>${problem}</li>`).join('')}
            </ul>
            
            <h4>Checklist de Implementación</h4>
            <div class="checklist">
                ${phase.checklist.map((item, index) => `
                    <div class="checklist-item">
                        <input type="checkbox" id="phase-${phase.id}-check-${index}" 
                               onchange="updateChecklistState(${phase.id}, ${index}, this.checked)">
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="phase-progress">
                <h4>Progreso de Implementación</h4>
                <div class="progress-bar">
                    <div class="progress-fill" id="phase-progress-${phase.id}" style="width: 0%"></div>
                </div>
                <div class="progress-text" id="phase-progress-text-${phase.id}">0% completado</div>
            </div>
        </div>
    `;
    
    return card;
}

// Toggle phase content
function togglePhaseContent(phaseId) {
    const content = document.getElementById(`phase-content-${phaseId}`);
    const header = content.previousElementSibling;
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        header.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        header.classList.add('expanded');
    }
}

// Update checklist state
function updateChecklistState(phaseId, itemIndex, checked) {
    if (!checklistState[phaseId]) {
        checklistState[phaseId] = {};
    }
    
    checklistState[phaseId][itemIndex] = checked;
    
    // Update checklist item appearance
    const checkbox = document.getElementById(`phase-${phaseId}-check-${itemIndex}`);
    if (checkbox) {
        const checklistItem = checkbox.parentElement;
        if (checked) {
            checklistItem.classList.add('completed');
        } else {
            checklistItem.classList.remove('completed');
        }
    }
    
    // Update progress
    updatePhaseProgress(phaseId);
}

// Update phase progress
function updatePhaseProgress(phaseId) {
    const phaseData = appData.phases.find(p => p.id === phaseId);
    if (!phaseData) return;
    
    const totalItems = phaseData.checklist.length;
    const completedItems = Object.values(checklistState[phaseId] || {}).filter(Boolean).length;
    const percentage = Math.round((completedItems / totalItems) * 100);
    
    const progressBar = document.getElementById(`phase-progress-${phaseId}`);
    const progressText = document.getElementById(`phase-progress-text-${phaseId}`);
    
    if (progressBar && progressText) {
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado (${completedItems}/${totalItems})`;
    }
}

// Initialize checklist state
function initializeChecklistState() {
    appData.phases.forEach(phase => {
        updatePhaseProgress(phase.id);
    });
}

// Load errors data
function loadErrorsData() {
    const container = document.getElementById('errors-container');
    if (!container) return;
    
    appData.critical_errors.forEach(error => {
        const errorCard = createErrorCard(error);
        container.appendChild(errorCard);
    });
}

// Create error card
function createErrorCard(error) {
    const card = document.createElement('div');
    card.className = 'error-card';
    
    card.innerHTML = `
        <div class="error-header">
            <h3 class="error-title">${error.title}</h3>
            <span class="priority-badge ${error.priority.toLowerCase()}">${error.priority}</span>
        </div>
        <div class="error-impact">💥 Impacto: ${error.impact}</div>
        <div class="error-nodes">
            ${error.affected_nodes.map(node => `<span class="node-tag">${node}</span>`).join('')}
        </div>
        <div class="error-solution">
            <strong>Solución:</strong> ${error.solution}
        </div>
    `;
    
    return card;
}

// Load optimizations data
function loadOptimizationsData() {
    const container = document.getElementById('optimizations-container');
    if (!container) return;
    
    appData.optimizations.forEach(optimization => {
        const optimizationCard = createOptimizationCard(optimization);
        container.appendChild(optimizationCard);
    });
}

// Create optimization card
function createOptimizationCard(optimization) {
    const card = document.createElement('div');
    card.className = 'optimization-card';
    
    card.innerHTML = `
        <div class="optimization-header">
            <div>
                <span class="optimization-priority">Prioridad ${optimization.priority}</span>
                <h3>${optimization.name}</h3>
            </div>
            <div class="roi-value">ROI: ${optimization.roi}%</div>
        </div>
        <p>${optimization.description}</p>
        <div class="optimization-metrics">
            <div><strong>Ahorro por ciclo:</strong> $${optimization.savings_per_cycle.toFixed(2)}</div>
            ${optimization.time_saved ? `<div><strong>Tiempo ahorrado:</strong> ${optimization.time_saved}s</div>` : ''}
        </div>
    `;
    
    return card;
}

// Load prompts data
function loadPromptsData() {
    const container = document.getElementById('prompts-container');
    if (!container) return;
    
    appData.phases.forEach(phase => {
        const promptCard = createPromptCard(phase);
        container.appendChild(promptCard);
    });
}

// Create prompt card
function createPromptCard(phase) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    
    card.innerHTML = `
        <div class="prompt-header">
            <h3>${phase.name}</h3>
            <div class="prompt-config">
                <div class="config-item">
                    <div class="config-label">Modelo</div>
                    <div class="config-value">${phase.optimized_prompt.model}</div>
                </div>
                <div class="config-item">
                    <div class="config-label">Temperatura</div>
                    <div class="config-value">${phase.optimized_prompt.temperature}</div>
                </div>
                <div class="config-item">
                    <div class="config-label">Max Tokens</div>
                    <div class="config-value">${phase.optimized_prompt.max_tokens}</div>
                </div>
            </div>
        </div>
        <div class="prompt-content">
            <div class="prompt-section">
                <h4>System Prompt</h4>
                <div class="prompt-text">
                    <button class="btn btn--sm copy-btn" onclick="copyToClipboard('system-${phase.id}', this)">Copiar</button>
                    <div id="system-${phase.id}">${phase.optimized_prompt.system_prompt}</div>
                </div>
            </div>
            <div class="prompt-section">
                <h4>User Prompt</h4>
                <div class="prompt-text">
                    <button class="btn btn--sm copy-btn" onclick="copyToClipboard('user-${phase.id}', this)">Copiar</button>
                    <div id="user-${phase.id}">${phase.optimized_prompt.user_prompt}</div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Load roadmap data
function loadRoadmapData() {
    const container = document.getElementById('roadmap-container');
    if (!container) return;
    
    const timeline = document.createElement('div');
    timeline.className = 'roadmap-timeline';
    
    Object.entries(appData.roadmap).forEach(([key, phase]) => {
        const phaseElement = createRoadmapPhase(phase);
        timeline.appendChild(phaseElement);
    });
    
    container.appendChild(timeline);
}

// Create roadmap phase
function createRoadmapPhase(phase) {
    const phaseElement = document.createElement('div');
    phaseElement.className = 'roadmap-phase';
    
    phaseElement.innerHTML = `
        <div class="roadmap-card">
            <div class="roadmap-header">
                <div>
                    <h3>${phase.name}</h3>
                    <span class="phase-weeks">Semanas ${phase.weeks}</span>
                </div>
                <div class="phase-impact">${phase.impact}</div>
            </div>
            <ul class="task-list">
                ${phase.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return phaseElement;
}

// Copy to clipboard functionality
async function copyToClipboard(elementId, button) {
    const element = document.getElementById(elementId);
    if (!element || !button) return;
    
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        showToast();
        
        // Visual feedback on button
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.style.backgroundColor = 'var(--color-success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Error copying to clipboard:', err);
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text, button);
    }
}

// Fallback copy function
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast();
        
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Copiado!';
            button.style.backgroundColor = 'var(--color-success)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        }
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
    }
    
    document.body.removeChild(textArea);
}

// Show toast notification
function showToast() {
    const toast = document.getElementById('copy-toast');
    if (toast) {
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}