switch (process.argv[2]) {
  case 'basic':
    await import('./basic.mjs');
    break;
  case 'deps':
    await import('./deps.mjs');
    break;
  case 'slots':
    await import('./slots.mjs');
    break;
  default:
    console.log('Please specify a test to run');
}
