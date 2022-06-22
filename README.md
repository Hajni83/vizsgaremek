json-server-auth ./server/users.json --w --port 3001

# Vizsgaremek
# USER STORY
**Társasjáték webshop - Board game webshop**

```sh
1. Főoldal
```
> A főoldal egy társasjáték webshopot bemutató oldal.

*Elfogadási kritérium:*

Egy mobiloptimalizált, letisztult weboldal, amelynek fejlécében látható a weboldal logója, egy kereső mező, belépés ikon, regisztrációs ikon. Megtalálható a fejlécben egy kosár ikon is, melyre kattintva elnavigál az oldal a kosár tartalmára.
A fejléc alatt ki lehet választani, hogy minden társasjáték, stratégiai, családi, kooperációs, parti társasjáték közül lehet választani. Bármelyikre kattintva elnavigál az adott társasjátékok oldalára.
Ez alatt egy carousellel lehet lapozni a legújabb termékeket.
A láblécben pedig a felhasználó megtalálja az elérhetőséget:telefonszám, email, facebook link.
Információkat:  Fizetés,szállítás, ÁSZF, Adatkezelési tájékoztató, Blog. Az információkon belül bármelyikre kattintva elnavigál a megfelelő oldalra.
Az oldal jobb alsó sarkában egy gomb jelenik meg, amivel fel lehet scrollozni az oldal tetejére.

```sh
2. Bejelentkezés és regisztráció
```

> A felhasználó be tud jelentkezni az oldalra vagy lehetősége van regisztrálni is.

*Elfogadási kritérium:*

A belépés ikonra kattintás után a bejelentkezés oldalra jut a felhasználó, ahol be kell írnia az email címét és jelszavát. Ezekkel az adatokkal a belépés gombra kattintva tud bejelentkezni.
Ha még nincs fiókja, akkor a belépés gomb alatt "Hozz létre új fiókot" linken tud regisztrálni.

```sh
3. Fiókadatok
```

> A felhasználó adatai jelennek meg.

*Elfogadási kritérium:*

A felhasználó meg tudja tekinteni az adatait: név, cím, telefonszám, email, rendelések, jelszó módosítás és ezeket tudja módosítani és az módosított adatokat menteni.

```sh
4. Regisztráció oldal
```

> A felhasználó regisztrálni tudja magát az oldalon.

*Elfogadási kritérium:*
A felhasználó a vezetéknév, keresztnév, email cím és telefonszám, valamint jelszó létrehozásával tudja magát regisztrálni.

```sh
5. Minden társasjáték
```

> Az összes társasjáték megjelenítése

*Elfogadási kritérium:*

Egy kártya formátumban fogja tudni a felhasználó megnézni az összes társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
6. Családi társasjáték
```

> Az családi társasjáték megjelenítése

*Elfogadási kritérium:*

Egy kártya formátumban fogja tudni a felhasználó megnézni a családi társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
7. Stratégiai társasjáték
```

> Az stratégiai társasjáték megjelenítése

*Elfogadási kritérium:*

Egy kártya formátumban fogja tudni a felhasználó megnézni a stratégiai társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.


```sh
8. Party társasjáték
```

> Az party társasjáték megjelenítése

*Elfogadási kritérium:*

Egy kártya formátumban fogja tudni a felhasználó megnézni a party társasjátékokat. Tud majd lapozni az oldalak között. A kártyákon szerepel a társasjáték fényképe, neve és ára.

```sh
9. Kártyára kattintás
```

> A társasjátékot bemutató kártyára kattintás

*Elfogadási kritérium:*

Bármelyik oldalon (főoldal,minden társasjáték, családi, stratégiai, party társasjáték)a adott társasjátékot bemutató kártyára kattintva megjelenik egy másik oldalon a társasjáték fényképe nagyobb méretben és lehet majd nagyítani. Valamint a felhasználó kap egy leírást a játékról, megtalálja az árát és be is tudja egy gomb segítségével tenni a kosárba. A gombra kattintással felugrik egy pop-up, melyben megjelenik, hogy sikeresen bekerült a termék a kosárba és a felhasználó választhat, hogy a tovább a kosárhoz vagy a tovább válogatok gombra kattint. A tovább válogatok gombra kattintva eltűnik a felugró ablak. A tovább a kosárhoz gomb esetében pedig a felhasználó a kosár oldalra navigál.


```sh
10. Kosár
```

> A kosár tartalmának megjelenítése

*Elfogadási kritérium:*

Megjelenik a felhasználó előtt táblazatos formában a kiválasztott játék neve, egységára, mennyiség, összeg. Az alján a bruttó végösszeg, illetve a szállítási költség.
A táblázat alatt két gomb látható: 1. a vásárlás folytatása. Akkor visszaugrik a főoldalra. 2. Fizetek. Felugrik egy pop-up, hogy köszönjük, hogy nálunk vásárolt és visszairányít a főoldalra.

```sh
11. Összegzés
```

> A rendelés adatainak összegzése

*Elfogadási kritérium:*

Megjelenik a felhasználó neve, címe, telefonszáma, email címe, kiválasztott szállítási mód, fizetés. Itt a felhasználónak lehetősége lesz egy Módosítás gombra kattintani, ha nem egyeznek meg az adatok. Megjelenik a termék neve, ára, mennyiség, fizetendő összeg, majd a végén a megrendelem gombra kattintva lezárul a rendelés, melyet egy felugró ablak erősít meg és visszaugrik a főoldalra.

```sh
12. Módosítás
```

> A rendelés adatainak módosítása

*Elfogadási kritérium:*

A rendelés adatainak összegzése oldalon amennyiben a felhasználó módosítani szeretne az adatokon, akkor egy kártya formátumú ablak jelenik meg, ahol át tudja írni a módosítandó adatokat és az alján a Módosítás gombra kattintva elmenti az új adatot.
