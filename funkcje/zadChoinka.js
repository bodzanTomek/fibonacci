// Stwórz funkcję createTrees, która przyjmie 3 parametry (wysokość części zielonej, liczbę choinek oraz wysokość pnia) 
// i narysuje choinki w konsoli. Funkcja nic nie powinna zwracać.



function createTrunk(trunkHeight, maxUpperBranchesWidth, numberOfTrees) {
    var character = '';
    for (var i = 1; i <= trunkHeight; i++) {
        for (var j = 1; j <= maxUpperBranchesWidth; j++) {
            character += "$";
        }
        var ancillaryCharakter = character;
        for (var k = 1; k < numberOfTrees; k++) {
            character += ancillaryCharakter;
        }
        console.log(character);
        character = '';
    }
}

function createUpperBranches(maxUpperBranchesWidth, upperBranchesHeight, numberOfTrees) {
    var character = '';
    var drawCharacter = Math.floor(maxUpperBranchesWidth / 2) + 1,
        stopDrawCharacter = drawCharacter,
        startDrawCharacter = drawCharacter;


    for (var i = 1; i <= upperBranchesHeight; i++) {

        for (var j = 1; j <= maxUpperBranchesWidth; j++) {
            if (j == drawCharacter && drawCharacter <= stopDrawCharacter) {
                character += "$";
                drawCharacter++;
            } else character += " ";
        }

        var ancillaryCharakter = character;
        for (var k = 1; k < numberOfTrees; k++) {
            character += ancillaryCharakter;
        }

        console.log(character);
        character = '';
        startDrawCharacter -= 1;
        drawCharacter = startDrawCharacter;
        stopDrawCharacter += 1;
    }
}

function createTrees(upperBranchesHeight, trunkHeight, numberOfTrees) {
    var maxUpperBranchesWidth = upperBranchesHeight * 2 - 1;
    createUpperBranches(maxUpperBranchesWidth, upperBranchesHeight, numberOfTrees);
    createTrunk(trunkHeight, maxUpperBranchesWidth, numberOfTrees);
}

createTrees(5, 3, 5);