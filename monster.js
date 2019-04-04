const monster = {
    hitPoints: 10,
    fight: function(hitPoints) {
        let damage = this.hitPoints - 12;
        this.hitPoints = damage;

    },
    lastDamageTaken: 14
}