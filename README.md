# Client
> node version is 14.15.5
## CLI
```
npm i -g @angular/cli
ng new <project-name>
cd <project-name>
npm run dev # read package.json

ng g m <module-name>
ng g c <path>/<component-name> -m <module-name> -p <prefix>
ng g s <sevice-name>

ng add @angular/material # install material ui - components, directive...
```

# Server
## CLI
> node version is 16.14.2
```
npm i -g @nestjs/cli
nest new <project-name>
cd <project-name>
npm run start:dev # read package.json

nest g app <app-name>

nest g mo <module-name>
nest g co <controller-name>
nest g s <service-name>


# ---
database
npm install --save @nestjs/typeorm typeorm mysql2
```