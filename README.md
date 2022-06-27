# Vizsgaremek
# USER STORY
**Társasjáték webshop - Board game webshop**

```sh
Főoldal
```
> A főoldal egy társasjáték webshopot bemutató oldal.

*Elfogadási kritérium:*

Egy mobiloptimalizált, letisztult weboldal, amelynek fejlécében látható a weboldal logója, egy kereső mező, belépés ikon. Megtalálható a fejlécben egy kosár ikon is, melyre kattintva elnavigál az oldal a kosár tartalmára.
A fejléc alatt ki lehet választani, hogy minden társasjáték, stratégiai, családi, kooperációs, parti társasjáték közül lehet választani. Bármelyikre kattintva elnavigál az adott társasjátékok oldalára.
Ez alatt egy carousellel lehet lapozni a legújabb termékeket.
A láblécben pedig a felhasználó megtalálja az elérhetőséget.

```sh
Bejelentkezés
```

> A felhasználó be tud jelentkezni az oldalra.

*Elfogadási kritérium:*

A belépés ikonra kattintás után a bejelentkezés oldalra jut a felhasználó, ahol be kell írnia az email címét és jelszavát. Ezekkel az adatokkal a belépés gombra kattintva tud bejelentkezni.


```sh
Minden társasjáték(Home képernyő)
```

> Az összes társasjáték megjelenítése

*Elfogadási kritérium:*

Kártya formátumban fogja tudni a felhasználó megnézni a társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
Családi társasjáték
```

> Az családi társasjáték megjelenítése

*Elfogadási kritérium:*

Kártya formátumban fogja tudni a felhasználó megnézni a családi társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
Stratégiai társasjáték
```

> Az stratégiai társasjáték megjelenítése

*Elfogadási kritérium:*

Kártya formátumban fogja tudni a felhasználó megnézni a stratégiai társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
Party társasjáték
```

> Az party társasjáték megjelenítése

*Elfogadási kritérium:*

Kártya formátumban fogja tudni a felhasználó megnézni a társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.

```sh
Kártyára kattintás
```

> A társasjátékot bemutató kártyára kattintás

*Elfogadási kritérium:*

Bármelyik oldalon (főoldal, családi, stratégiai, party, akció társasjáték) az adott társasjátékot bemutató kártyára kattintva megjelenik egy másik oldalon a társasjáték fényképe nagyobb méretben. Valamint a felhasználó kap egy leírást a játékról, megtalálja az árát és be is tudja egy gomb segítségével tenni a kosárba azt. A gombra kattintással felugrik egy pop-up, melyben megjelenik, hogy sikeresen bekerült a termék a kosárba és a felhasználó választhat, hogy a tovább a kosárhoz vagy a tovább válogatok gombra kattint. A tovább válogatok gombra kattintva eltűnik a felugró ablak. A tovább a kosárhoz gomb esetében pedig a felhasználó a kosár oldalra navigál.
Amennyiben egy felhasználó bejelentkezik egy adminisztrátori fiókba, akkor lehetősége nyílik az adott társasjáték adatainak megtekintése mellett, azok módosítására is. Ilyenkor az adott társasjáték adatai frissülnek az adatbázisban.


```sh
Kosár és összegzés
```

> A kosár tartalmának megjelenítése, szállítási cím megadása

*Elfogadási kritérium:*

Megjelenik a felhasználó előtt táblazatos formában a kiválasztott játék neve, egységára, mennyiség, összeg. Az alján a bruttó végösszeg, illetve a szállítási költség.
A felhasználónak lehetősége nyílik a szállítási cím megadására.
Ezek alatt két gomb látható: 
1. A vásárlás folytatása. Ekkor visszaugrik a főoldalra. 
2. Fizetek. Felugrik egy pop-up, hogy köszönjük, hogy nálunk vásárolt, a megrendelést adatbázisba mentésre kerül, ahogy a szállítási címet is és visszairányítja a főoldalra a felhasználót.

```sh
Felhasználók listázása és törlése
```

> A felhasználókat egy bejelentkezett adminisztrátor megtekintheti és törölheti

*Elfogadási kritérium:*

A felhasználókat egy bejelentkezett adminisztrátor megtekintheti és törölheti. A felület az oldal tetején megjelenő menüből érhető el, mindezt az authenticateJWT és az AuthGuardService védi. 