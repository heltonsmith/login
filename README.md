# Login App

Este proyecto es una aplicación de autenticación simple desarrollada con Angular e Ionic.

### Pasos para Clonar y Usar el Repositorio

1. **Clonar el repositorio**: Inicia clonando el repositorio utilizando

```bash
git clone https://github.com/heltonsmith/login.git
cd login
````

2. **Instalar dependencias**: Ejecuta `npm install` para instalar todas las dependencias necesarias.
3. **Ejecutar la aplicación**: Utiliza `ionic serve` para levantar el servidor local y ver la aplicación en tu navegador.

#### Comandos utilizados:
##### Códigos Angular + Ionic

**Componentes de tipo página:**
ionic g c pages/home
ionic g c pages/contacto
ionic g c pages/store

**Modulo tipo página:**
ionic g m pages --routing

**Componentes de tipo reutilizable:**
ionic g c shared/header
ionic g c shared/footer

**Modulo tipo reutilizable:**
ionic g m shared

**Creación de servicios:**
ionic g s servicios/datos-personales

**//para quitar restricción de inicializacion de variables tsconfig.json**
"strictPropertyInitialization": false,
"strictNullChecks": false

**Importar modulos necesarios:**
IonicModule,
FormsModule

**Creación de servicios para login:**
ionic g s servicios/datos-personales
ionic g s servicios/auth

**Creación de guard para login y protección de /store y /login:**
ionic g g guard/auth
ionic g g guard/redirectIfAuth
