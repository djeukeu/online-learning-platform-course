import convict from 'convict';
import * as dotenv from 'dotenv';
dotenv.config();

const conf = convict({
    config: {
        port: { format: 'port', default: 4002, env: 'PORT' },
        env: {
            format: ['production', 'development', 'staging'],
            default: 'development',
            env: 'APP_ENV',
        },
        app_name: {
            format: 'String',
            default: 'online-learning-course',
            env: 'APP_NAME',
        },
        secret_key: {
            format: 'String',
            default: '',
            env: 'JWT',
        },
        kafka_name: {
            format: 'String',
            default: '',
            env: 'KAFKA_NAME',
        },
        kafka_broker: {
            format: 'String',
            default: '',
            env: 'KAFKA_BROKER',
        },
        kafka_registry: {
            format: 'String',
            default: '',
            env: 'KAFKA_SCHEMA_REGISTRY',
        },
        kafka_topic: {
            format: 'String',
            default: '',
            env: 'KAFKA_TOPIC',
        },
        payment_event: {
            format: 'String',
            default: '',
            env: 'PAYMENT_EVENT',
        },
    },
});
conf.validate({ allowed: 'strict' });
export default conf.get('config');
