import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"
import { useAppSelector } from "redux/store";

import { LightMode, DrakMode } from "styles/theme";

const StylesProviders: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const isDrakMode = useAppSelector((state) => state.themeMode.isDrakMode);
	console.log(isDrakMode);


	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={isDrakMode ? DrakMode : LightMode}>
				{/* <CssBaseline /> */}
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default StylesProviders