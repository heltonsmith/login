# Login App

Este proyecto es una aplicación de autenticación simple desarrollada con Angular e Ionic.

### Pasos para Clonar y Usar el Repositorio

1. **Clonar el repositorio**: Inicia clonando el repositorio utilizando

```bash
git clone https://github.com/heltonsmith/login.git
````

```bash
cd login
````

2. **Instalar dependencias**: Ejecuta `npm install` para instalar todas las dependencias necesarias.
3. **Ejecutar la aplicación**: Utiliza `ionic serve` para levantar el servidor local y ver la aplicación en tu navegador.

### Comandos utilizados:
#### Códigos Angular + Ionic

**Componentes de tipo página:**
```bash
ionic g c pages/home
```
```bash
ionic g c pages/contacto
```
```bash
ionic g c pages/store
```

**Modulo tipo página:**
```bash
ionic g m pages --routing
```

**Componentes de tipo reutilizable:**
```bash
ionic g c shared/header
```
```bash
ionic g c shared/footer
```

**Modulo tipo reutilizable:**
```bash
ionic g m shared
```

**Creación de servicios:**
```bash
ionic g s servicios/datos-personales
```

**//para quitar restricción de inicializacion de variables tsconfig.json**
```bash
"strictPropertyInitialization": false,
```
```bash
"strictNullChecks": false
```

**Importar modulos necesarios en LoginComponent:**
```bash
IonicModule,
FormsModule
```

**Creación de servicios para login:**
```bash
ionic g s servicios/datos-personales
```
```bash
ionic g s servicios/auth
```

**Creación de guard para login y protección de /store y /login:**
```bash
ionic g g guard/auth
```
```bash
ionic g g guard/redirectIfAuth
```
