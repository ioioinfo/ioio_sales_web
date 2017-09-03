/**
 ┌──────────────────────────────────────────────────────────────┐
 │               ___ ___ ___ ___ ___ _  _ ___ ___               │
 │              |_ _/ _ \_ _/ _ \_ _| \| | __/ _ \              │
 │               | | (_) | | (_) | || .` | _| (_) |             │
 │              |___\___/___\___/___|_|\_|_| \___/              │
 │                                                              │
 │                                                              │
 │                       set up in 2015.2                       │
 │                                                              │
 │   committed to the intelligent transformation of the world   │
 │                                                              │
 └──────────────────────────────────────────────────────────────┘
*/

module.exports = {
    entry: {
        index: './app/index.jsx',
        departments_list: './app/departments_list.jsx',
        channels: './app/channels.jsx',
        budgets: './app/budgets.jsx',
        points: './app/points.jsx',
        histories: './app/histories.jsx',
        call_centers: './app/call_centers.jsx',
        threads: './app/threads.jsx',
        demands: './app/demands.jsx',
        allocations: './app/allocations.jsx',
        allocation_histories: './app/allocation_histories.jsx',
        customers: './app/customers.jsx',
        students_list: './app/students_list.jsx',
        teachers_list: './app/teachers_list.jsx',
        achievements: './app/achievements.jsx',
        appointments_list: './app/appointments_list.jsx',
        visit_records: './app/visit_records.jsx',
        contracts_list: './app/contracts_list.jsx',
        contract_detail_list: './app/contract_detail_list.jsx',
        prepayments_list: './app/prepayments_list.jsx',
        connection_ways_list: './app/connection_ways_list.jsx',
        threads_customers_list: './app/threads_customers_list.jsx',
        intentions_customers_list: './app/intentions_customers_list.jsx',
        cpqs_list: './app/cpqs_list.jsx',
        cpq_details_list: './app/cpq_details_list.jsx',
    },
    output: {
        path: __dirname,
        filename: './public/js/app/[name].js'
    },
    resolve: {
        modules: [__dirname, '../node_modules','components'],
        alias: {

        },
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
   }
};
