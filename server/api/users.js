import { Meteor } from 'meteor/meteor';

Meteor.users.allow({
    update: function( userId, doc, fields, modifier ) {
        let allowed_fields = [
            'characters',
        ];

        return fields.every(field => allowed_fields.includes(field));
    }
});

Meteor.publish('userData', function() {
    if( this.userId) {
        return Meteor.users.find({ _id: this.userId }, {
            fields: {
                characters: true,
            }
        });
    } else {
        this.ready();
    }
});

Meteor.methods({

});