\# Quality\_Model.md  

\## Modelo de Calidad – ISO/IEC 25010



Este documento define el \*\*modelo de calidad del sistema\*\* basado en la norma \*\*ISO/IEC 25010\*\*.  

Cada atributo de calidad se expresa mediante \*\*métricas verificables\*\*, de modo que puedan ser evaluadas objetivamente y relacionadas con elementos de configuración específicos.



---



\## Atributos de calidad y métricas



| Atributo          | Definición (1 línea)                                      | Métrica verificable                                                                 | EC que lo soporta        |

|-------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------|--------------------------|

| Funcionalidad     | Capacidad de cumplir los requisitos definidos             | 100% de los requisitos RF-001 a RF-004 implementados y ejecutables                  | /docs/SRS, /src          |

| Eficiencia        | Uso adecuado de recursos y tiempos de respuesta           | Tiempo de respuesta ≤ 2 segundos en el 95% de las operaciones básicas               | /src, /config            |

| Usabilidad        | Facilidad de uso y comprensión del sistema                | Un usuario nuevo puede ejecutar una operación básica en ≤ 2 intentos               | README.md, /src          |

| Mantenibilidad   | Facilidad para modificar el sistema sin introducir errores| Cobertura de pruebas ≥ 60% en funciones críticas                                    | /tests, /src             |

| Confiabilidad     | Capacidad de operar sin fallos durante su uso             | Ejecución continua de 20 operaciones consecutivas sin errores                      | /src, /tests             |

| Seguridad         | Protección contra accesos o usos no autorizados           | 0 credenciales o datos sensibles almacenados en texto plano                         | /config, /src            |



---



\## Métricas estrella ⭐



Las siguientes métricas se consideran \*\*críticas\*\* para este proyecto debido a su impacto directo en la calidad y confiabilidad del sistema:



\### ⭐ Métrica 1 – Eficiencia

> \*El sistema debe responder en ≤ 2 segundos en el 95% de las operaciones básicas.\*



Esta métrica es clave porque garantiza una experiencia de uso aceptable y permite validar el desempeño del sistema de forma objetiva.



\### ⭐ Métrica 2 – Mantenibilidad

> \*La cobertura de pruebas debe ser ≥ 60% en las funciones críticas.\*



Esta métrica reduce el riesgo de errores al realizar cambios posteriores a la línea base y facilita el mantenimiento del sistema.



---



\## Notas finales



\- Todas las métricas definidas pueden ser verificadas mediante pruebas, revisión de código o validación de configuración.

\- Los atributos de calidad están directamente relacionados con los \*\*Elementos de Configuración (EC)\*\* definidos en el CM\_PLAN.

\- Este modelo de calidad apoya la toma de decisiones y el control de cambios posteriores a la Baseline v1.0.



