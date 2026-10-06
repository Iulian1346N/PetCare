const animale = [
    { id: 1, titlu: "Vaccinare antirabică", gata: false, eticheta: "veterinar" },
    { id: 2, titlu: "Cumpărare hrană", gata: true, eticheta: "alimentatie" },
    { id: 3, titlu: "Spălare și tuns blană", gata: false, eticheta: "igiena" }
];

const TIPURI = ["veterinar", "alimentatie", "igiena"];

function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
    return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
    return lista.filter((t) => t.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaActivitate(lista, titlu, eticheta = "igiena") {
    const titluCurat = titlu.trim();
    
    if (titluCurat === "") {
        console.log("Eroare: Titlul nu poate fi gol!");
        return lista;
    }
    if (!TIPURI.includes(eticheta)) {
        console.log("Eroare: Tip de îngrijire invalid!");
        return lista;
    }

    const elementNou = {
        id: nextId(lista),
        titlu: titluCurat,
        gata: false,
        eticheta: eticheta
    };

    return [...lista, elementNou];
}

function comutaGata(lista, id) {
    return lista.map((t) => t.id === id ? { ...t, gata: !t.gata } : t);
}

function stergeActivitate(lista, id) {
    return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(animale).join(", "));
console.log("Active:", numaraActive(animale));
console.log("Căutare 'hrana':", listeazaTitluri(cautaDupaTitlu(animale, "hrana")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaActivitate(animale, "Control veterinar lunar", "veterinar");
console.log("Lista nouă:", listaNoua.length, "elemente");
console.log("Originalul a rămas cu:", animale.length, "elemente");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaGata(listaNoua, 1);
console.log("După bifarea id 1, active:", numaraActive(listaNoua));

listaNoua = stergeActivitate(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaActivitate(animale, "   "); 
adaugaActivitate(animale, "Test validare", "urgenta"); 