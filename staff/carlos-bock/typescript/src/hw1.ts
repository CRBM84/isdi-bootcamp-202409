/*Desafío: Sistema de Gestión de Transporte

Contexto:

Una empresa de logística necesita gestionar diferentes tipos de vehículos para el
transporte de mercancías. Todos los vehículos comparten cierta lógica común (como el
cálculo de combustible necesario), pero algunos vehículos tienen capacidades especiales,
como refrigeración o transporte de materiales peligrosos. 

Requisitos:

Crear una clase abstracta Vehiculo que contenga:

Propiedades comunes: pesoCarga, distanciaRecorrer.
Método común para calcular el combustible necesario (calcularCombustible).
Método abstracto mostrarDetalle que cada subclase debe implementar.
Crear una interfaz Refrigerado que defina el método mantenerTemperatura.

Crear una interfaz Peligroso que defina el método verificarSeguridad.

Crear las siguientes subclases que extienden Vehiculo y pueden implementar interfaces:

Camion que solo extiende Vehiculo.
CamionRefrigerado que extiende Vehiculo e implementa Refrigerado.
CamionPeligroso que extiende Vehiculo e implementa Peligroso.
Implementar los métodos necesarios en cada clase, asegurando que realizan operaciones lógicas
(por ejemplo, cálculos o verificaciones).

Objetivo:

Demostrar el uso de clases abstractas para compartir lógica común.
Usar interfaces para añadir funcionalidades específicas a ciertas clases.
Combinar ambos conceptos en un sistema coherente.



*/