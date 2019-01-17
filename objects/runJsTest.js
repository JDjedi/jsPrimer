let restaurant = {
    name: 'Ramen Tatsuya',
    guestCapacity: 60,
    guestCount: 0,

    checkAvailability: function() {
        //console.log(this) // 'this' references the object the method is defined on

        if (this.guestCount <= this.guestCapacity) {
            console.log(`You may seat more guests, there is room!`)
            restaurant.seatParty(11)
        } else {
            console.log(`You may not seat additional guests, there is not enough room!`)
            restaurant.removeParty
        }
    },

    seatParty: function(partySizeToAdd) {
        this.guestCount = this.guestCount + partySizeToAdd
        console.log(`You are seating ${this.guestCount} out of ${this.guestCapacity} available seats.`)
    },

    removeParty: function(partySizeToLeave){
        this.guestCount = this.guestCount - partySizeToLeave
        console.log(`You are seating ${this.guestCount} out of ${this.guestCapacity} available seats.`)
    }
}

restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()

