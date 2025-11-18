
		var crmContractNo;
		var fields = {};
		console.log("crmContractNo: "  + crmContractNo);
		window.addEventListener("onEmbeddedMessagingReady", () => {
	    	console.log("Received the onEmbeddedMessagingReady event…");
	    	console.log("the contractNo is "  + crmContractNo);
	    	if (crmContractNo) {
		  		fields.contractNo = crmContractNo;
			}
			embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields(fields);
		});
		function initEmbeddedMessaging() {
			try {
				embeddedservice_bootstrap.settings.language = 'ja'; // For example, enter 'en' or 'en-US'

				embeddedservice_bootstrap.init(
					'00D0l0000003gBr',
					'MessagingWebReleaseTest',
					'https://occ-crown--partial.sandbox.my.site.com/ESWMessagingWebRelease',
					{
						scrt2URL: 'https://occ-crown--partial.sandbox.my.salesforce-scrt.com'
					}
				);
			} catch (err) {
				console.error('Error loading Embedded Messaging: ', err);
			}
		};

	<script type='text/javascript' src='https://occ-crown--partial.sandbox.my.site.com/ESWMessagingWebRelease/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
