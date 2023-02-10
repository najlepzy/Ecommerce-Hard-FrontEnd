/**
 * @brief Static Class for parsing strings during render.
 */
export default 
class Parse{
	/**
	 * Parses Integer or String into defined price format
	 * 
	 * Format Defined: 1.234.567,89
	 * 
	 * @param value - Integer or String to parse
	 * @param cents - Fix Number to Cents if `true`. Remove them if `false`.
	 * @returns parsed `String`, `null` on failure
	 */
	static price(value, cents = false){
		if( (!value || (typeof value) === "object") && value != 0)
			return null
		
		var result = value
		if( (typeof value) === "string")
			result = Number(value)
		if(cents == true)
			return '$'+result.toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		else
			return '$'+result.toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	}
}