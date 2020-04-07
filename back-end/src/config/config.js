module.exports = function () {
    switch (process.env.NODE_ENV) {
        case "dev":
            return {
                Name: 'dev',
                port: 35000,
                Mongo: {
                    connectionString: "mongodb://admin:ais.co.th@52.163.210.190:27018/landingPage",
                }
            };

        case "iot":
            return {
                Name: 'iot',
                port: 35000,
                Mongo: {
                    connectionString: "mongodb://admin:ais.co.th@52.163.210.190:27018/landingPage",
                }
            };

        case "staging":
            return {
                Name: 'staging',
                port: 35000,
                Mongo: {
                    connectionString: "mongodb://admin:ais.co.th@104.215.197.5:27018/landingPage",
                }
            };

        case "prod":
            return {
                Name: 'prod',
                port: 35000,
                Mongo: {
                    connectionString: "mongodb://mgladmin:mgldbAis9@192.168.112.30,192.168.112.31,192.168.112.32:4815/landingPage",
                }
            };

        default:
            return {
                Name: 'default',
                port: 35000,
                Mongo: {
                    connectionString: "mongodb://admin:ais.co.th@52.163.210.190:27018/landingPage",
                }
            }
    }
}
