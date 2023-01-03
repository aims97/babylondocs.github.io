/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro', 
    'installation', 
    'setnode', 
    {
      type: 'category',
      label: 'Modules',
      link: {
        type: 'doc',
        id: 'modules',
      },
      items: [
        {
          type: 'category',
          label: 'Epoching Module',
          link: {
            type: 'doc',
            id: 'module/epoch/epochingmod',
          },
          items: [
            'module/epoch/paramsmod',
            'module/epoch/epochinfomod',
            'module/epoch/currentepoch',
            'module/epoch/epochmsgs',
            'module/epoch/latepochmsgs',
            'module/epoch/validatorlifecycle',
            'module/epoch/delegationlifecycle',
          ],
        },
        {
          type: 'category',
          label: 'Checkpointing Module',
          link: {
            type: 'doc',
            id: 'module/checkpointing/checkpointingmod',
          },
          items: [
            'module/checkpointing/rawcheckpointinglist',
            'module/checkpointing/recentrawcheckpointinglist',
            'module/checkpointing/rawcheckpoint',
            'module/checkpointing/latestcheckpoint',
            'module/checkpointing/blspublickey',
            'module/checkpointing/epochstatus',
            'module/checkpointing/recentepochcount',
            'module/checkpointing/checkpointparams',
          ],
        },
        {
          type: 'category',
          label: 'BTC Light Client',
          link: {
            type: 'doc',
            id: 'module/btclightclient/lightclient',
          },
          items: [
            'module/btclightclient/lightparams',
            'module/btclightclient/lighthashes',
            'module/btclightclient/lightcontains',
            'module/btclightclient/lightcontainsbytes',
            'module/btclightclient/lightmainchain',
            'module/btclightclient/lighttip',
            'module/btclightclient/lightbaseheader',
          ],
        },
        {
          type: 'category',
          label: 'BTC Checkpoint',
          link: {
            type: 'doc',
            id: 'module/btccheckpoint/btccheckpoint',
          },
          items: [
            'module/btccheckpoint/checkpointparams',
            'module/btccheckpoint/checkpointheight',
            'module/btccheckpoint/epochsubmissions',
          ],
        },
        {
          type: 'category',
          label: 'CZ Concierge',
          link: {
            type: 'doc',
            id: 'module/czconcierge/czconcierge',
          },
          items: [
            'module/czconcierge/conciergeparams',
            'module/czconcierge/chainlist',
            'module/czconcierge/chaininfo',
            'module/czconcierge/finalizedchaininfo',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      link: {
        type: 'doc',
        id: 'node/nodeoperator',
      },
      items: [
        'node/nodeconfig',
        'node/nodemanage',
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'doc',
        id: 'resources/resources',
      },
      items: [
        'resources/mainnet',
        'resources/testnet',
      ]
    },
    'videoguides',
    {
      type: 'category',
      label: 'gRPC Gateway (REST API)',
      link: {
        type: 'doc',
        id: 'grpc/grpcgateway',
      },
      items: [
        {
          type: 'category',
          label: 'BTC Checkpoint',
          link: {
            type: 'doc',
            id: 'grpc/btccheckpointgrpc',
          },
          items: [
            'grpc/grpcparams',
            'grpc/epochnum',
            'grpc/submissions',
          ],
        },
        {
          type: 'category',
          label: 'BTCLightClient',
          link: {
            type: 'doc',
            id: 'grpc/btclightclient/lightclient1',
          },
          items: [
            'grpc/btclightclient/lightheader',
            'grpc/btclightclient/lightcontains',
            'grpc/btclightclient/lightcontainsbytes',
            'grpc/btclightclient/lighthashes',
            'grpc/btclightclient/lightmainchain',
            'grpc/btclightclient/lightparams',
            'grpc/btclightclient/lighttip',
          ],
        },
        {
          type: 'category',
          label: 'Epoching',
          link: {
            type: 'doc',
            id: 'grpc/epoching/currentepoch',
          },
          items: [
            'grpc/epoching/currentepoch',
            'grpc/epoching/delegationlifecycle',
            'grpc/epoching/epoch',
            'grpc/epoching/latepochmsgs',
            'grpc/epoching/paramsmod',
            'grpc/epoching/validatorlifecycle',
          ],
        },
      ],
    },
    'error',
        {
          type: 'category',
          label: 'CLI Command Overview',
          link: {
            type: 'doc',
            id: 'cli',
          },
          items: [
            {
              type: 'category',
              label: 'Babylond',
              link: {
                type: 'doc',
                id: 'Cli/babylond',
              },
              items: [
                {
                  type: 'category',
                  label: 'Babylond_keys',
                  link: {
                    type: 'doc',
                    id: 'Cli/Babylond/babylond_keys',
                  },
                  items: [
                    'Cli/Babylond/Babylond_keys/keys_dd',
                    'Cli/Babylond/Babylond_keys/keys-delete',
                    'Cli/Babylond/Babylond_keys/keys-export',
                    'Cli/Babylond/Babylond_keys/keys-import',
                    'Cli/Babylond/Babylond_keys/keys-list',
                    'Cli/Babylond/Babylond_keys/keys-migrate',
                    'Cli/Babylond/Babylond_keys/keys-mnemonic',
                    'Cli/Babylond/Babylond_keys/keys-parse',
                    'Cli/Babylond/Babylond_keys/keys-rename',
                    'Cli/Babylond/Babylond_keys/keys_show',
                  ],
                  
                },
                'Cli/Babylond/babylond_migrate',
                'Cli/Babylond/babylond_genesis',
                {
                  type: 'category',
                  label: 'Babylond_query',
                  link: {
                    type: 'doc',
                    id: 'Cli/Babylond/babylond_query',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'Babylond_query_auth',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_auth',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_account',
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts',
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num',
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account',
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts',
                        'Cli/Babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params',
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_authz',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_authz',
                      },
                      items: [
                        {
                          type: 'category',
                          label: 'Babylond_query_authz_grants',
                          link: {
                            type: 'doc',
                            id: 'Cli/Babylond/BabylondQuery/Babylond_query_authz/babylond_query_authz_grants',
                          },
                          items: [
                            'Cli/Babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/babylond_query_authz_grants_by_grantee',
                            'Cli/Babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/babylond_query_authz_grants_by_granter',
                          ],
                        
                        },
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_bank',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_bank',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_balances',
                        'Cli/Babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata',
                        'Cli/Babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_total',
                       
                      ],
                      
                    },
                    'Cli/Babylond/BabylondQuery/babylond_query_block', 
                    {
                      type: 'category',
                      label: 'Babylond_query_btccheckpoint',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_btccheckpoint',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_params',
                       
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_btclightclient',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_btclightclient',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_base-header',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_contains',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_hashes',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_params',
                        'Cli/Babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_tip',
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_checkpointing',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_checkpointing',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_checkpointing/babylond_query_checkpointing_params',
                        {
                          type: 'category',
                          label: 'Babylond_query_checkpointing_raw-checkpoint',
                          link: {
                            type: 'doc',
                            id: 'Cli/Babylond/BabylondQuery/Babylond_query_checkpointing/babylond_query_checkpointing_raw_checkpoint',
                          },
                          items: [
                            'Cli/Babylond/BabylondQuery/Babylond_query_checkpointing/Babylond_query_checkpointing_raw-checkpoint/babylond_query_checkpointing_raw-checkpoint_list',
                           
                          ],
                          
                        },
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_distribution',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_distribution',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_commission',
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool',
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_params',
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards',
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_slashes',
                        'Cli/Babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards',
                       
                      ],
                      
                    },
                    {
                      type: 'category',
                      label: 'Babylond_query_epoching',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_epoching',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_epoching/babylond_query_epoching_params',
                     
                       
                      ],
                      
                    },
                    'Cli/Babylond/BabylondQuery/babylond_query_evidence',
                    {
                      type: 'category',
                      label: 'Babylond_query_feegrant',
                      link: {
                        type: 'doc',
                        id: 'Cli/Babylond/BabylondQuery/babylond_query_freegrant',
                      },
                      items: [
                        'Cli/Babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-grantee',
                        'Cli/Babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter',
                     
                       
                      ],
                      
                    },
                  ],
                  
                },
              ],
            },
          ],
        },
  ],
};

module.exports = sidebars;
