declare module 'castv2-client' {
    export = Cast.Client;
}

declare namespace Cast {
    
    interface Controller {

    }

    interface JsonController {

    }

    interface RequestResponseController {

    }

    interface ConnectionController {

    }

    interface HeartbeatController {

    }

    interface ReceiverController {

    }

    interface MediaController {

    }

    interface Application {
        
    }

    interface DefaultMediaReceiver {

    }

    class Client {
        volume: number;
        stepInterval: number;
        muted: boolean;

        connect
    }

}

// module.exports.Controller                 = require('./lib/controllers/controller');
// module.exports.JsonController             = require('./lib/controllers/json');
// module.exports.RequestResponseController  = require('./lib/controllers/request-response');
// module.exports.ConnectionController       = require('./lib/controllers/connection');
// module.exports.HeartbeatController        = require('./lib/controllers/heartbeat');
// module.exports.ReceiverController         = require('./lib/controllers/receiver');
// module.exports.MediaController            = require('./lib/controllers/media');

// module.exports.Client = module.exports.PlatformSender   = require('./lib/senders/platform');
// module.exports.Application                              = require('./lib/senders/application');
// module.exports.DefaultMediaReceiver                     = require('./lib/senders/default-media-receiver');
