let billetter = [];

function kjop() {
    const film = document.getElementById('film').value;
    const antallInput = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    // regular expressions for validation
    const telefonRegex = /^\d{8}$/; // Norwegian phone number format (8 digits)
    const epostRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const antall = parseInt(antallInput);

    // Input validation for all fields
    let errorMessage = "";
    if (!film || !antallInput || !fornavn || !etternavn || !telefon || !epost) {
        errorMessage += "Vennligst fyll ut alle feltene.\n";
    }
    if (!Number.isInteger(antall) || antall <= 0) {
        errorMessage += "Vennligst angi et gyldig antall billetter (positivt heltall).\n";
    }
    if (!telefonRegex.test(telefon)) {
        errorMessage += "Vennligst angi et gyldig telefonnummer (8 siffer).\n";
    }
    if (!epostRegex.test(epost)) {
        errorMessage += "Vennligst angi en gyldig e-postadresse.\n";
    }

    // Display error message if validation fails
    if (errorMessage !== "") {
        alert(errorMessage);
        return;
    }

    // Proceed with further processing if all validations pass
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    billetter.push(billett);
    visBilletter();
    nullstillInput();
}

function slettAlt() {
    billetter = [];
    visBilletter();
}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fornavn}, Etternavn: ${billett.etternavn}, Telefon: ${billett.telefon}, Epost: ${billett.epost}`;
        billettListe.appendChild(li);
    });
}

function nullstillInput() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}