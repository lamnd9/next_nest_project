## Install
- install new project
```
% npm i --save-exact -g @nestjs/cli@10.4.2

changed 263 packages in 18s

% nest new backend
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
...
✔ Installation in progress... ☕

🚀  Successfully created project backend
👉  Get started with the following commands:
```
- install mongoose package
link techniques: https://docs.nestjs.com/techniques/mongodb
```
npm install --save-exact @nest/mongoose@10.0.10 mongoose@8.5.1
```
- install nestjs/config
https://docs.nestjs.com/techniques/configuration
```
npm install --save-exact @nest/config@3.2.3
```
- install class-validator
https://docs.nestjs.com/techniques/validation
```
npm install --save-exact class-validator@0.14.1 class-transformer@0.5.1
```
- install hash password
https://www.npmjs.com/package/bcrypt?activeTab=readme
```
% npm i -save-exact bcrypt@5.1.1
% npm i --save-dev @types/bcrypt
% npm i --save-exact api-query-params@5.4.0
```
- install/update package
```
npm install
```

## generate CURD API
```
% nest g resource users --no-spec
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/users/users.controller.ts (894 bytes)
CREATE src/users/users.module.ts (248 bytes)
CREATE src/users/users.service.ts (609 bytes)
CREATE src/users/dto/create-user.dto.ts (30 bytes)
CREATE src/users/dto/update-user.dto.ts (169 bytes)
CREATE src/users/entities/user.entity.ts (21 bytes)
UPDATE src/app.module.ts (478 bytes)
```

run
```
npm run dev
```

## Link
http://localhost:8080/