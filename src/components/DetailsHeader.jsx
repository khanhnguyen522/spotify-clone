import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className='relative w-full flex flex-col'>
      {/* CREATE A BLUR RECTANGLE */}
      <div className='w-ful bg-gradient-to-l from-transparent
      to-black sm:h-48 h-28'/>
      {/* CREATE INFO */}
      <div className='absolute inset-0 flex items-center'>
        {/* IMAGE */}
        <img 
          alt='art'
          src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart}
          className='sm:w-48 w-28 sm:h-48 h-28 rounded-full
          object-cover border-2 shadow-xl shadow-black'
        />
        {/*ARTIST NAME & SONG TITLE */}
        <div className='ml-5'>
          {/*song name */}
          <p className='font-bold sm:text-3xl text-xl text-white'>
            {artistId ? artist?.name : songData?.title}
          </p>

          {/*artist name */}
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='text-base text-gray-400 mt-2'>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          {/*song genre */}
          <p className='text-base text-gray-400 mt-2'>
            {artistId
              ? artist?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>

      {/* create some space between the rectangle and lyrics */}
      <div className='w-full sm:h-44 h-24'/>

    </div>
  );
};

export default DetailsHeader;
