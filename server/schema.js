module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    // Schemas

     var SongModel = mongoose.model('Song', new Schema({
        name: {
            type: String,
            required: true
        },
        creator: {
            type: String,
            ref: 'User',
            required: true
        },
        uploadDate: {
            type: String
        },
        length: {
            type: Number
        },
        downloadCount: {
            type: Number
        },
        comments: {
            type: Array
        },
        tag: {
            type: String
        },
        listenCount: {
            type: Number
        },
        favoriteCount: {
            type: Number
        }
    }));

    var UserModel = mongoose.model('User', new Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        followers: {
            type: Array
        },
        favorites: {
            type: Array
        },
        avatarImg: {
            type: String
        }, 
        songs: [{type: Schema.Types.ObjectId, ref: 'Song' }]
    }));

    
    // Validation

    // Regexs
    // var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    // Validators
    /* UserSchema.path('email').validate(function (email) {
       return emailRegex.test(email.text); // Assuming email has a text attribute
    }, 'The e-mail field cannot be empty.')
    */

    console.log('Schemas are good');

    return {
        User: UserModel,
        Song: SongModel
    };
};






/* Examples
var Sizes = new Schema({
    size: { type: String, required: true },
    available: { type: Number, required: true, min: 0, max: 1000 },
    sku: { 
        type: String, 
        required: true, 
        validate: [/[a-zA-Z0-9]/, 'Product sku should only have letters and numbers']
    },
    price: { type: Number, required: true, min: 0 }
});
 
var Images = new Schema({
    kind: { 
        type: String, 
        enum: ['thumbnail', 'catalog', 'detail', 'zoom'],
        required: true
    },
    url: { type: String, required: true }
});
 
var Variants = new Schema({
    color: String,
    images: [Images],
    sizes: [Sizes]
});
 
var Categories = new Schema({
    name: String
});
 
var Catalogs = new Schema({
    name: String
});
 
// Product Model
 
var Product = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    style: { type: String, unique: true },
    images: [Images],
    categories: [Categories],
    catalogs: [Catalogs],
    variants: [Variants],
    modified: { type: Date, default: Date.now }
});

// validation
 
Product.path('title').validate(function (v) {
    console.log("validate title");
    console.log(v);
    return v.length > 10 && v.length < 70;
});
 
Product.path('style').validate(function (v) {
    console.log("validate style");
    console.log(v);
    return v.length < 40;
}, 'Product style attribute is should be less than 40 characters');
 
Product.path('description').validate(function (v) {
    console.log("validate description");
    console.log(v);
    return v.length > 10;
}, 'Product description should be more than 10 characters');
 
var ProductModel = mongoose.model('Product', Product);

*/