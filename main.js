function alternatingSums(array) {
    let i = 0;
    let team1 = 0;
    let team2 = 0;
    const sum = [];

    for(let person of array){
        if( i % 2 === 0 ){ 
            team1 += person;
        } else {
            team2 += person;
        }
        i++;
    }
    sum.push(team1);
    sum.push(team2);

    return sum;
}




/**
* Test Suite 
*/
describe('alternatingSums()', () => {
    it('returns alternating sums of even and odd', () => {
        // arrange
        const nums = [50, 60, 60, 45, 70];
        
        // act
        const result = alternatingSums(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([180, 105]);
    });
});
