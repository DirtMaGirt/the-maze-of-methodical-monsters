// const player = {
//     hitPoints: 100,
//     baseAttackDamage: 5,
//     lastDamageTaken: 0,
//     level: 1,
//     isAlive: true,

//     fight: function(enemy) {
//         const rawDamageTaken = enemy.calculateAttackDamage();
//         this.lastDamageTaken = Math.max(rawDamageTaken - this.level, 1);
//         this.hitPoints -= this.lastDamageTaken;
//         if (this.hitPoints <= 0) {
//             this.isAlive = false;
//         }

//         const rawAttackDamage = this.calculateAttackDamage();
//         enemy.takeDamage(rawAttackDamage);
//     },

//     calculateAttackDamage: function() {
//         return Math.floor(Math.random() * this.baseAttackDamage);
//     },

//     levelUp: function() {
//         this.baseAttackDamage = Math.floor(this.baseAttackDamage * 1.2);
//         this.level++;
//         this.hitPoints += 5;
//     },
// };

const player = {
    hitPoints: 100,
    lastDamageTaken: 0,
    isAlive: true,

    fight: function() {
        // this.lastDamageTaken = Math.floor(Math.random() * 5);
        this.hitPoints -=  Math.floor(Math.random() * 5);

        // if (this.hitPoints <= 0) {
        //     this.isAlive = false;
        // }
    }
}