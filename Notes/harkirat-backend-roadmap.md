1 - Communication Protocals
    Machines need to talk to each other, and the set of rules for two machines to talk to each other is called protocol

    Transport Layer Protocol --> TCP UDP

    Application Layer Protocol --> HTTP

    TCP -> Machine will keep on trying until a connection is established (Login)
    UDP -> Will just throw packets to other machine, and no ack is given from receiving end (Zoom Calls, Live Streaming)

    HTTP -> Browsers use this to interact with Servers

    CREATE HTTP SERVER FROM SCRATCH USING CPP


    DATABASES:
        MYSQL
        POSTGRES
        MONGODB
        FIREBASE
    
    Browser -> Server -> DB


    Messaging Bus / Pubsub --->  a messaging pattern that allows publishers to send messages to a message broker, and subscribers to express interest in receiving certain messages.

    Asnyc communication services

    Messaging queues are used in case of sending emails and phone messages... Since if HTTP request is useed then our backend will require a response from the side of the email service and this will take some time as it requries another protocol (SMTP) to send and get ack, also if email service is down this will lead to a blocker in the backend service, so messaging queues are preffered overt https in such cases

    Messaging and email  takes time - we don't want our server to wait for their acknowledgement

    Different such Async Tasks happens in the backend

    
