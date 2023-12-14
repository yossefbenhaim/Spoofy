import { StyledEngineProvider, ThemeProvider } from "@mui/material"
import { useAppSelector } from "redux/store";

import { LightMode, DrakMode } from "styles/theme";

const StylesProviders: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const isDrakMode = useAppSelector((state) => state.themeMode.mode);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={isDrakMode ? DrakMode : LightMode}>
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default StylesProviders