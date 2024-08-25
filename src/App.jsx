import './App.css';

const emojis = ['👍', '👏', '❤️', '😯', '😢', '😡'];
function clsx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div className='container'>
      <div className='bg-gray-600 h-20 w-80 rounded' />
      <div className='flex items-start relative parent-div'>
        <span className='text-white/75 cursor-pointer '>like</span>
        <div className='h-10 w-56 shadow-lg left-0 absolute -top-10 bg-gray-800 rounded-lg hidden'></div>
        <div className='gap-3 flex h-10 w-36 shadow-lg left-0 absolute -top-10 items-center ml-2'>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              style={{ '--loop-index': index }}
              className={clsx(
                'text-white/75 cursor-pointer text-2xl origin-bottom animate-scale-out transition hover:scale-[1.75] hover:!origin-center '
              )}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
