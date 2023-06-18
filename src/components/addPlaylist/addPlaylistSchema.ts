import * as z from 'zod';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import ErrorMessageDialogAddPlaylist from './errorMessage';
import AddSongSchema from 'components/addSong/AddSongSchema';

const AddPlaylistSchema = z.object({
    [AddPlaylistFormFieldName.name]: z
        .string()
        .nonempty({
            message: ErrorMessageDialogAddPlaylist.requiredError,
        })
        .min(2, { message: ErrorMessageDialogAddPlaylist.playlistNameMin })
        .max(50, ErrorMessageDialogAddPlaylist.playlistNameMax),
    [AddPlaylistFormFieldName.songs]: z.array(z.string()).nonempty({
        message: ErrorMessageDialogAddPlaylist.requiredError,
    }),
});

export type AddPlaylistForm = z.infer<typeof AddPlaylistSchema>;
export default AddPlaylistSchema;
