const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to provide a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'You need to provide a username!'
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Create the reactioncount virtual
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;