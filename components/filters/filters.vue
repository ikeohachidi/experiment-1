<template>
	<div class="filters">
		<div class="header d-flex">
			Filter
			<span class="text-primary font-weight-bold ml-3">Clear all</span>
			<span class="ml-auto" @click="onCloseIconClick">
				<v-icon>mdi-close</v-icon>
			</span>
		</div>

		<p class="subtitle">Title</p>
		<v-text-field
			label="Outlined"
			placeholder="Title"
			density="compact"
			variant="outlined"
			hide-details
		></v-text-field>
		<hr>

		<p class="subtitle">Identification</p>
		<v-text-field
			label="Search ID"
			density="compact"
			variant="outlined"
			hide-details
		></v-text-field>
		<v-text-field
			label="Search UUID"
			density="compact"
			variant="outlined"
			hide-details
		></v-text-field>
		<v-text-field
			label="Search Parent UUID"
			density="compact"
			variant="outlined"
			hide-details
		></v-text-field>
		<hr class="mt-5">

		<p class="subtitle">Amount</p>
		<label for="deductible">Deductible</label>
		<v-range-slider v-model="deductible" hide-details color="primary"></v-range-slider>
		<v-row>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="deductible[0]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="deductible[1]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
		</v-row>

		<label for="adjusters-fee">Loss adjusters fee</label>
		<v-range-slider v-model="adjustersFee" hide-details color="primary"></v-range-slider>
		<v-row>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="adjustersFee[0]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="adjustersFee[1]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
		</v-row>

		<label for="adjusters-fee">Default reserve</label>
		<v-range-slider v-model="reserve" hide-details color="primary"></v-range-slider>
		<v-row>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="reserve[0]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field
					density="compact"
					v-model="reserve[1]"
					variant="outlined"
					hide-details
				></v-text-field>
			</v-col>
		</v-row>
		<hr class="mb-4">

		<v-row>
			<v-col cols="6">
				<v-btn variant="tonal">save preset</v-btn>
			</v-col>
			<v-col cols="6">
				<v-btn class="bg-primary text-white">apply filters</v-btn>
			</v-col>
		</v-row>
	</div>	
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
	(event: 'close'): void
}>()

const deductible = ref([0, 100]);
const adjustersFee = ref([0, 100]);
const reserve = ref([0, 100]);

const onCloseIconClick = (): void => {
	emit('close')
}
</script>

<style lang="scss" scoped>
hr {
	border-color: rgba(0, 0, 0, 0.12);
}

.filters {
	padding: 8px 24px;
	width: 100%;
	white-space: nowrap;
	font-size: 14px;
	border-right: 1px solid rgba(144, 202, 249, 1);

	.header {

	}

	.subtitle {
		color: rgba(117, 117, 117, 1);
		font-weight: 600;
		margin: 24px 0 12px;
	}

	.v-input {
		margin-bottom: 16px;
	}

	.v-btn {
		font-size: 14px;
	}

	label {
		color: rgba(117, 117, 117, 1);
		margin-bottom: 16px;
	}
}
</style>