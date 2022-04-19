      
                                                                        **LES**
												               											
Koden i dette repoet er laget på 1 dag for å gjøre meg selv kjent med React -> En enkel side med registrering, innlogging, og et par funksjoner i hjem-siden som kun er tilgjengelig dersom man logger inn på riktig vis. Systemet kan sjekke brukernavn og passord, men ikke håndtere flere samtidige brukere. En mer riktig innloggingsløsning vil komme etterhvert, foreløpig er dette kun en start. 



      **Registrering**
Inputvalidering er implementert, ellers er det en relativt simpel løsning 



      **Innlogging**
Innlogging bør gjøres med et skikkelig system for å holde styr på den enkeltes brukers innloggingsstatus, men det vil ta mer tid å lage. Her sjekkes brukernavn og passord mot databasen, og dersom det er riktig settes en boolsk verdi på server til True -> dette tillater brukeren å bruke funksjonene i Home.js
Jeg har brukt en tråd som venter i noen minutter, før den setter verdien tilbake til False, så etter en stund må brukeren logge inn på nytt. 


	**Nettsiden**
Etter innlogging, kan brukeren trykke på knapper for å generere fakta, bilder av hunder og forslag til gjøremål. Dette er for å teste ut grunnleggende react (HTTP-requests). 
