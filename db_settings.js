
//ssh -p 2222 s284201@se.ifmo.ru -Y -L5432:pg:5432

module.exports.getDbSettings = function(sett) {

    switch (sett){
        case 'user' :
            return '2'
        case 'host' :
            return '2'
        case 'database' :
            return '2'
        case 'password' :
            return '2'
        case 'port' :
            return 2
    }

}


module.exports.getSSHSettings = function(sett) {

    switch (sett){
        case 'user' :
            return '2';
        case 'host' :
            return '2';
        case 'password' :
            return '2';
        case 'port' :
            return 2;
    }

}
