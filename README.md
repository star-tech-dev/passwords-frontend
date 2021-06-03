## Настройка окружения
 
Файл ```.env```  
  
```REACT_APP_API_BASE_URL``` - путь до api бекенда.  
```APP_PORT``` - порт, на котором будет развёрнуто приложение в production-режиме.  


&nbsp;
   
 
## Разработка  

```yarn dev``` - классический dev-мод.  
```yarn dev:server``` - запуск ноды в dev-моде, которая возвращает production-билд react-приложения.


&nbsp; 


## Роутинг
  
Все роуты прописаны в файле ```src/router/routes.ts```  
Роуты только для гостей (не прошедших аутентификацию) с флагом ```forGuests```  
Роуты только для прошедших аутентификацию с флагом ```private```


&nbsp;


## Глобальные модальные окна
  
Модальные окна подключаются в ```src/components/modals/Controller```  
  
Доступные методы для работы с модальными окнами:  
```openModal(modalId)```  
```openClose(modalId)```  
```closeLastModal()```  
```closeAllModals()```  
