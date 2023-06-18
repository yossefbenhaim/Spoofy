import * as z from 'zod';
import AddSongFormFieldsNames from 'models/emuns/formFieldsName';
import ErrorMessageDialogAddSong from 'components/addSong/errorMessage';

const AddSongSchema = z.object({
    [AddSongFormFieldsNames.name]: z
        .string()
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        })
        .min(2, { message: ErrorMessageDialogAddSong.songNameMin })
        .max(50, ErrorMessageDialogAddSong.songNameMax),
    [AddSongFormFieldsNames.artist]: z
        .string({ required_error: ErrorMessageDialogAddSong.requiredError })
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        }),
    [AddSongFormFieldsNames.duration]: z
        .number({ invalid_type_error: ErrorMessageDialogAddSong.duration })
        .min(20, { message: ErrorMessageDialogAddSong.duration }),
});

export type AddSongForm = z.infer<typeof AddSongSchema>;
export default AddSongSchema;
