import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

Meteor.users.allow({
    update: function( userId, doc, fields, modifier ) {
        let allowed_fields = [
            'profile',
            'characters',
        ];

        return fields.every(field => allowed_fields.includes(field));
    }
});

Meteor.publish('userData', function() {
    if( this.userId) {
        return Meteor.users.find({ _id: this.userId }, {
            fields: {
                profile: true,
                characters: true,
            }
        });
    }
});

Meteor.methods({

});