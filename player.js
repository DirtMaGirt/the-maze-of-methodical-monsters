const player = {
    hitPoints: 75,
    fight: function(event) {
        let damage = this.hitPoints - 12;
        this.hitPoints = damage;

    },
    lastDamageTaken: 12
}