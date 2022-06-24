<template>
	<table>
		<thead>
			<tr>
				<td 
					:key="header.key"
					v-for="header in headers" 
					:style="[header.style ? header.style : {}]"
				>
					<slot :name="`head(${header.key})`">
						{{ header.label }}
					</slot>
				</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, rowIndex) in rows" :key="rowIndex">
				<td 
					v-for="header in headers" 
					:style="[header.style ? header.style : {}]"
					:key="`${rowIndex}-${header.key}`"
				>
					<slot 
						:name="`cell(${header.key})`"
						:row="row"
						:cell="row[header.key]"
					>
						{{ (header.key in row) ? row[header.key] : '' }}
					</slot>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts" setup>
import { CSSProperties} from 'vue'

interface Header {
	label: string,
	key: string,
	style: CSSProperties
}

const props = withDefaults(defineProps<{
	headers: Array<Header>,
	rows: Array<{[key: string]: unknown}>,
	isLoading: boolean
}>(), {
	headers: [],
	rows: [],
	isLoading: false
}) 
</script>

<style lang="scss" scoped>
table {
	border-collapse: collapse;
	width: 100%;
	td {
		font-size: 12px;
		padding: 16.5px 14px;
		border: 1px solid rgba(0, 0, 0, 0.12);;
	}
}

thead {
	td {
		font-weight: bold;
		text-transform: uppercase;
	}
}

</style>