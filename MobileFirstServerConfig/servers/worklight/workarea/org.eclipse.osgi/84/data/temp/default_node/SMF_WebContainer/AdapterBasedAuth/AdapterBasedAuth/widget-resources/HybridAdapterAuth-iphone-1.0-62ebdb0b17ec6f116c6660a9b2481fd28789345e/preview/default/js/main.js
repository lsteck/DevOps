
/* JavaScript content from js/main.js in folder common */
/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function wlCommonInit(){

}

function getSecretData(){
	var resourceRequest = new WLResourceRequest("/adapters/AuthAdapter/getSecretData", WLResourceRequest.GET, 30000);
	resourceRequest.send().then(
		getSecretData_CallbackOK,
		getSecretData_CallbackFail
	);
}

function getSecretData_CallbackOK(response){
	$("#ResponseDiv").html(JSON.stringify(response.responseJSON));
}

function getSecretData_CallbackFail(response){
	$("#ResponseDiv").html(response.errorMsg);
}


/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}