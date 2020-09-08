<template>
    <div>
    <h3>Inline Policies</h3>
    <div v-for="policyId in inlinePolicyIds" v-bind:key="policyId">
        <div class="row">
            <div class="col-md-5">
                <div class="card">
                    <h6 class="card-header" v-bind:id="'inline-policy' + '-' + policyId + 'card'">
                        Name: {{ inlinePolicy(policyId).PolicyName }}
                        <br>
                        <br>
                        Attached to Principals:
                        <ul>
                            <li v-if="principalTypeLeveragingInlinePolicy(policyId, 'Role').length > 0">
                                Roles:
                              <ul>
                                    <li v-for="role in principalTypeLeveragingInlinePolicy(policyId, 'Role')" v-bind:key="role">
                                        {{ role }}
                                    </li>
                              </ul>
                          </li>
                            <li v-if="principalTypeLeveragingInlinePolicy(policyId, 'User').length > 0">
                                Users:
                              <ul>
                                    <li v-for="user in principalTypeLeveragingInlinePolicy(policyId, 'User')" v-bind:key="user">
                                        {{ user }}
                                    </li>
                              </ul>
                          </li>
                            <li v-if="principalTypeLeveragingInlinePolicy(policyId, 'Group').length > 0">
                                Groups:
                              <ul>
                                    <li v-for="group in principalTypeLeveragingInlinePolicy(policyId, 'Group')" v-bind:key="group">
                                        {{ group }}
                                    </li>
                              </ul>
                          </li>
                        </ul>
                        </h6>
                        <div class="card-body">
                        <p class="card-text">
                            Services: {{ servicesAffectedByInlinePolicy(policyId).length }}
                            <br>
                            <br>
                            Infrastructure Modification Actions: {{ inlinePolicyFindings(policyId, "InfrastructureModification").length }}
                            <br>
                        </p>
                        </div> <!-- /card-text -->
                <div class="card-footer">
                    <!--Alert for Risk Type: Privilege Escalation Exposure-->
                    <template v-if="inlinePolicyFindings(policyId, 'PrivilegeEscalation').length > 0">
                        <div class="alert alert-danger popovers" data-toggle="popover" data-html="true" data-placement="top"
                            title="Privilege Escalation"
                            v-bind:data-content="getRiskDefinition('PrivilegeEscalation')"
                            role="alert">Privilege Escalation
                        </div>
                    </template>
                    <!--Alert for Risk Type: Data Exfiltration Escalation-->
                    <template v-if="inlinePolicyFindings(policyId, 'DataExfiltration').length > 0">
                        <div class="alert alert-warning popovers" data-toggle="popover" data-html="true" data-placement="top"
                            title="Data Exfiltration"
                            v-bind:data-content="getRiskDefinition('DataExfiltration')"
                            role="alert">Data Exfiltration
                        </div>
                    </template>
                    <!--Alert for Risk Type: Resource Exposure-->
                    <template v-if="inlinePolicyFindings(policyId, 'ResourceExposure').length > 0">
                        <div class="alert alert-danger popovers" data-toggle="popover" data-html="true" data-placement="top"
                            title="Resource Exposure"
                            v-bind:data-content="getRiskDefinition('ResourceExposure')"
                            role="alert">Resource Exposure
                        </div>
                    </template>
                    <!--Alert for Assumable By Compute Service-->
                    <template v-if="inlinePolicyAssumableByComputeService(policyId).length > 0">
                        <div class="alert alert-info popovers" data-toggle="popover" data-html="true" data-placement="top"
                            title="Policy leveraged by Compute Service Role"
                            v-bind:data-content="getRiskDefinition('AssumableByComputeService')"
                            role="alert">Policy leveraged by Compute Service Role
                        </div>
                    </template>
                </div>
                </div>
                <br>
                <br>
            </div>
            <div class="col-md-7">
                <div v-bind:id="'inline-policy'  + '-' + policyId + '-' + 'card-details'">
                    <div class="card">
                        <!--Policy Document-->
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse"
                               v-bind:data-parent="'#inline-policy' + '-' + policyId + '-' + 'card-details'"
                               v-bind:href="'#inline-policy' + '-' + policyId + '-' +'policydocument'"
                            >Policy Document</a>
                        </div>
                        <div v-bind:id="'inline-policy' + '-' + policyId + '-' +'policydocument'"
                             class="panel-collapse collapse">
                            <div class="card-body">
<pre><code>
{{ JSON.parse(JSON.stringify(inlinePolicyDocument(policyId), undefined, '\t')) }}
</code></pre>
                            </div>
                        </div><!--Policy Document-->
                        <!--Data Exfiltration-->
                        <div v-if="inlinePolicyFindings(policyId, 'DataExfiltration').length > 0">
                            <div class="card-header">
                                <a class="card-link" data-toggle="collapse"
                                   v-bind:data-parent="'#inline-policy' + '-' + policyId + '-' + 'card-details'"
                                   v-bind:href="'#inline-policy' + '-' + policyId + '-' +'data-exfiltration'"
                                >Data Exfiltration</a>
                            </div>
                            <div v-bind:id="'inline-policy' + '-' + policyId + '-' +'data-exfiltration'"
                                 class="panel-collapse collapse">
                                <div class="card-body">
<pre><code>
{{ JSON.parse(JSON.stringify(inlinePolicyFindings(policyId, 'DataExfiltration'), undefined, '\t')) }}
</code></pre>
                                </div>
                            </div>
                        </div><!--Data Exfiltration-->
                        <!--Infrastructure Modification Actions-->
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse"
                               v-bind:data-parent="'#inline-policy' + '-' + policyId + '-' + 'card-details'"
                               v-bind:href="'#inline-policy' + '-' + policyId + '-' +'infrastructure-modification-actions'"
                            >Infrastructure Modification Actions</a>
                        </div>
                        <div v-bind:id="'inline-policy' + '-' + policyId + '-' +'infrastructure-modification-actions'"
                             class="panel-collapse collapse">
                            <div class="card-body">
<pre><code>
{{ JSON.parse(JSON.stringify(inlinePolicyFindings(policyId, 'InfrastructureModification'), undefined, '\t')) }}
</code></pre>
                            </div>
                        </div><!--Infrastructure Modification Actions-->
                        <!--PrivilegeEscalation-->
                        <div v-if="inlinePolicyFindings(policyId, 'PrivilegeEscalation').length > 0">
                            <div class="card-header">
                                <a class="card-link" data-toggle="collapse"
                                   v-bind:data-parent="'#inline-policy' + '-' + policyId + '-' + 'card-details'"
                                   v-bind:href="'#inline-policy' + '-' + policyId + '-' +'privilege-escalation'"
                                >Privilege Escalation</a>
                            </div>
                            <div v-bind:id="'inline-policy' + '-' + policyId + '-' +'privilege-escalation'"
                                 class="panel-collapse collapse">
                                <!--TODO: Format the Privilege Escalation stuff-->
                                <div class="card-body">
<pre><code>
{{ JSON.parse(JSON.stringify(inlinePolicyFindings(policyId, 'PrivilegeEscalation'), undefined, '\t')) }}
</code></pre>
                                </div>
                            </div>
                        </div><!--Privilege Escalation-->
                        <!--ResourceExposure-->
                        <div v-if="inlinePolicyFindings(policyId, 'ResourceExposure').length > 0">
                            <div class="card-header">
                                <a class="card-link" data-toggle="collapse"
                                   v-bind:data-parent="'#inline-policy' + '-' + policyId + '-' + 'card-details'"
                                   v-bind:href="'#inline-policy' + '-' + policyId + '-' +'resource-exposure'"
                                >Resource Exposure</a>
                            </div>
                            <div v-bind:id="'inline-policy' + '-' + policyId + '-' +'resource-exposure'"
                                 class="panel-collapse collapse">
                                <div class="card-body">
<pre><code>
{{ JSON.parse(JSON.stringify(inlinePolicyFindings(policyId, 'ResourceExposure'), undefined, '\t')) }}
</code></pre>
                                </div>
                            </div>
                        </div><!--Resource Exposure-->
                    </div>
                </div>
            </div>
</div>


    </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const inlinePoliciesUtil = require('../util/inline-policies');
// eslint-disable-next-line no-unused-vars
let glossary = require('../util/glossary');

export default {
    name: "InlinePolicies",
    props: {
        iam_data: {
            type: Object
        },
        riskDefinitions: {
            type: String
        }
    },
    computed: {
            inlinePolicyIds() {
                return inlinePoliciesUtil.getInlinePolicyIds(this.iam_data);
            },
        },
    methods: {
        inlinePolicyDocument(policyId) {
            return inlinePoliciesUtil.getInlinePolicyDocument(this.iam_data, policyId);
        },
        inlinePolicy: function(policyId) {
            return inlinePoliciesUtil.getInlinePolicy(this.iam_data, policyId);
        },
        inlinePolicyFindings: function(policyId, riskType) {
            return inlinePoliciesUtil.getInlinePolicyFindings(this.iam_data, policyId, riskType);
        },
        servicesAffectedByInlinePolicy: function(policyId) {
            return inlinePoliciesUtil.getServicesAffectedByInlinePolicy(this.iam_data, policyId)
        },
        principalTypeLeveragingInlinePolicy: function (policyId, principalType) {
            return inlinePoliciesUtil.getPrincipalTypeLeveragingInlinePolicy(this.iam_data, policyId, principalType);
        },
        inlinePolicyAssumableByComputeService: function (policyId) {
            return inlinePoliciesUtil.inlinePolicyAssumableByComputeService(this.iam_data, policyId);
        },
        getRiskDefinition: function(riskType) {
            return glossary.getRiskDefinition(riskType)
        },
    }
}
</script>

<style scoped>

</style>