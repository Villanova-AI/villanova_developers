<template>
	<div id="dev-entando">
		<!-- Start open-shift main content -->
		<div v-if="openshift" class="main-content">
			<div class="layout-container">
				<div class="get-started-grid width-container">
					<div class="get-started-left openshift">
						<img src="./assets/logo-openshift.png" alt="openshift" />
					</div>
					<div class="get-started-right">
						<p>
							Greetings, OpenShift users! See the links below to get started with your Entando journey or click
							<a :href="path('/tutorials/create/ms/generate-microservices-and-micro-frontends.html')">here</a>
							to learn how Entando can be used to generate micro frontends and microservices within OpenShift.
						</p>
					</div>
				</div>
			</div>
			
			<div class="begin-developing layout-container custom-bkgd">
				<div class="width-container">
					<h1>Welcome to Villanova.ai</h1>
					<p>Your gateway to modern application development.</p>
					<div class="button-container">
						<a :href="path('/tutorials/getting-started/custom-install.html')">GET STARTED</a>
						<a href="https://github.com/Villanova-AI" target="_blank">
							<img src="./assets/github.svg" />GITHUB
						</a>
						<a href="https://huggingface.co/villanova-ai" target="_blank" style="background: #222; color: white; padding: 6px 12px; border-radius: 8px;">
							<img :src="path('/assets/mychat-icon.png')" alt="huggingface" style="width:20px; vertical-align:middle; margin-right:8px;"/>HUGGINGFACE
						</a>
						
					</div>
				</div>
			</div>
		</div>
		
		<!-- ✅ Start default/jhipster main content -->
		<div v-else class="main-content">
			<div v-if="jhipster" class="layout-container">
				<div class="get-started-grid width-container">
					<div class="get-started-left jhipster">
						<img src="./assets/logo-jhipster.svg" alt="jhipster" />
						JHipster
					</div>
					<div class="get-started-right">
						<p>
							Greetings, Java Hipster! See the links below to get started with your Entando journey or click
							<a :href="path('/tutorials/create/ms/generate-microservices-and-micro-frontends.html')">here</a>
							to learn how Entando leverages JHipster to generate micro frontends and microservices.
						</p>
					</div>
				</div>
			</div>
			
			<div class="begin-developing layout-container" :class="{'jhipster-bkgd': jhipster}">
				<div class="width-container">
					<h1>Welcome to</h1>
					<h1><span class="villanova">Villanova Platform</span></h1>
					<p>Application Composition Platform for Kubernetes</p>
					<div class="button-container">
						<a :href="path('/docs/getting-started/')">GET STARTED</a>
						<a href="https://github.com/Villanova-AI" target="_blank">
							<img src="./assets/github.svg" />GITHUB
						</a>
						<a 
						href="https://huggingface.co/villanova-ai" 
						target="_blank" 
						class="huggingface-button"
						>
							<img src="./assets/huggingface.svg" alt="huggingface" />
							HUGGING FACE
						</a>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				openshift: false, // 👈 metti true se vuoi testare il blocco OpenShift
				jhipster: false   // 👈 oppure true per mostrare il blocco JHipster
			}
		},
		methods: {
			path(subpath) {
				// Se VuePress fornisce la funzione $withBase, usala per gestire i link relativi
				if (this.$withBase) {
					return this.$withBase(subpath);
				}
				// Altrimenti restituisci direttamente il path
				return subpath;
			}
		}
	}
</script>
