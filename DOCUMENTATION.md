## **1. Az alkalmazás célja**

- Az alkalmazás egy társasjátékokat árusító webshop, mely adminisztrációs funkciókat is ellát.
​
## **2. Az alkalmazás telepítése**

- A projekt leklónozása után ki kell adni az npm i parancsot, mind a backend, mind a frontend mappában.
- Ezek után már csak a backend mappában kell kiadni az npm run deploy parancsot. Ezzel egyúttal az alkalmazás el is indul.
​
## **3. Az alkalmazás konfigurálása**
​
nem kell
​
## **4. Az alkalmazás indítása**
1. opció:
- El kell indítani a Docker Desktop alkalmazást, majd a backend mappában kiadni: npm run deploy
2. opció:
- A /backend mappába belépve a terminálban ki kell adni az `npm start` parancsot  
- A /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend
​

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  
​
E-mail | Jelszó
------------ | -------------
test@test.hu | test789
​

A backend-hez integrációs tesztek is tartoznak ezeket elindítani a backend könyvtárból lehet az npm run test paranccsal.
Az alkalmazás további működésével kapcsolatos információk a [README.md](README.md)-ben találhatók.
## **5. A végpontok dokumentációja**
​
Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs
​
---
---
​
## **Linkek:**  
​
[README.md](README.md)
​
​## **Hiányzó feature-k**

- Regisztráció lehetősége
- A Roleguard kész, de nincs használva
- Társasjáték létrehozásának a lehetősége
- Rendelés módosítása
- Rendelés során az azonos társasjátékok egy sorba kerülhetnének mennyiségi jelöléssel.
- Sajnos az oldal tetején is csak félkész a kereső doboz.