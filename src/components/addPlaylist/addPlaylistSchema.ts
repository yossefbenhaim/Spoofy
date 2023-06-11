import * as z from 'zod';
import FormFieldsNames from 'models/emuns/formFieldsName';
import ErrorMessageDialogAddSong from 'components/addSong/errorMessage';

const AddPlaylistSchema = z.object({
    [FormFieldsNames.name]: z
        .string()
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        })
        .min(2, { message: ErrorMessageDialogAddSong.songNameMin })
        .max(50, ErrorMessageDialogAddSong.songNameMax),
    [FormFieldsNames.artist]: z
        .string({ required_error: ErrorMessageDialogAddSong.requiredError })
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        }),
    [FormFieldsNames.duration]: z
        .number({ invalid_type_error: ErrorMessageDialogAddSong.duration })
        .min(20, { message: ErrorMessageDialogAddSong.duration }),
});

export type AddPlaylistForm = z.infer<typeof AddPlaylistSchema>;
export default AddPlaylistSchema;
