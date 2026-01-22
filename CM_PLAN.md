\# CM\_PLAN.md  

\## Plan Básico de Gestión de Configuración



Este documento define los \*\*Elementos de Configuración (EC)\*\* del proyecto, indicando su ubicación, la razón por la cual deben ser controlados y quién es responsable de su modificación.  

El objetivo es asegurar \*\*trazabilidad, control de cambios y calidad del software\*\*.



---



\## Elementos de Configuración (EC)



| EC              | Ubicación        | ¿Por qué es EC?                                              | Quién lo modifica        |

|-----------------|------------------|---------------------------------------------------------------|--------------------------|

| SRS\_v1.md       | /docs/SRS/       | Define los requisitos; cambios impactan alcance y pruebas     | Analista / Product Owner |

| SDD\_v1.md       | /docs/SDD/       | Describe el diseño; afecta arquitectura e implementación      | Arquitecto / Dev Lead   |

| README.md       | /                | Explica el proyecto y su uso; guía a usuarios y evaluadores   | Dev / Analista          |

| CHANGELOG.md    | /                | Registra cambios relevantes; soporta auditoría y seguimiento | Dev / Configuration Mgr |

| config.example  | /config/         | Parametriza el sistema; afecta ejecución y entorno            | DevOps / Dev            |

| src/            | /src/            | Contiene el código fuente; define el comportamiento del sistema | Desarrollador           |

| tests/          | /tests/          | Valida calidad; detecta errores y regresiones                 | QA / Dev                |

| CM\_PLAN.md      | /                | Define cómo se controla la configuración del proyecto         | Configuration Manager   |



---



\## Notas



\- Todos los EC forman parte del repositorio y están bajo control de versiones.

